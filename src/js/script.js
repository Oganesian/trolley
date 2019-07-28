class Participant {
  constructor(name, shifts, number_of_shifts) {
    this.name = name;
    this.shifts = shifts;
    this.number_of_shifts = number_of_shifts;
  }
}

var participants = {};
var chosen_participants = new Array();
var current_iterations = 0;
var shifts = new Array();

$(document).ready(function() {
  $('form[name="time"]').submit(function(e){
    e.preventDefault();
    var str = $("#shifts_id").val();
    str = str.replace(/OK\t/g, "1");
    str = str.replace(/O/g, "1");
    str = str.replace(/K/g, "");
    str = str.replace(/\t/g, "0");
    var arr = str.split("");
    if(arr.length < $("#number_of_shifts_id").val()) arr.push("0");
    var table = document.getElementById("myTable");
    var row = table.insertRow();
    participants[$("#names").val()] = new Participant($("#names").val(), arr, 0);
    for(var i = 0; i < arr.length; i++){
      var cell = row.insertCell();
      if(arr[i] == "0"){
        $(cell).addClass("no-cell");
      }else{
        $(cell).addClass("yes-cell");
      }
    }
    var cellWithName = row.insertCell(0);
    cellWithName.innerHTML = $("#names").val();
  });

  $('#start-button').click(function(){
    $('#temp-container').css("display", "block");
    $('#start-button').attr("disabled", true);
    nextShift();
  });

  $("#temp-shifts").on("click", "td:nth-child(1)", function() {
    if($(this).toggleClass("chosen").hasClass("chosen"))
      chosen_participants.push($(this).text());
    else
      chosen_participants.splice(chosen_participants.indexOf($(this).text()), 1);

    if(chosen_participants.length == 2) $("#next-shift").removeAttr("disabled");
    else $("#next-shift").attr("disabled", "true");
  });

  $("#next-shift").click(function(){
    nextShift();
  });
});

function nextShift(){
  $("#myTable").find('td').removeClass("bigger-cell");
  $("#myTable").find('td:nth-child('+(current_iterations+2)+')').each (function() {
    $(this).toggleClass("bigger-cell");
  });
  $("#next-shift").attr("disabled", "true");
  $("#temp-shifts tbody").empty();
  if(chosen_participants.length === 2) {
    for(i = 0; i < 2; i++){
      participants[chosen_participants[i]].number_of_shifts++;
    }
    shifts.push(chosen_participants);
  }
  if(current_iterations == ($("#number_of_shifts_id").val() - 1)){
    $("#next-shift").text("Finish");
  }
  else if(current_iterations == $("#number_of_shifts_id").val()){
    createResultTable();
  }
  chosen_participants = new Array();
  var temp_participants = {};
  for(var key in participants){
    if(participants[key].shifts[current_iterations] == 1){
      temp_participants[participants[key].name] = participants[key].number_of_shifts;
    }
  }
  var tbody = document.getElementById('temp-shifts').getElementsByTagName('tbody')[0];
  for (var key in temp_participants) {
    var row = tbody.insertRow();
    var nameCell = row.insertCell();
    var n_o_sCell = row.insertCell();
    $(nameCell).html(key);
    $(n_o_sCell).html(temp_participants[key]);
  }
  current_iterations++;
}

function createResultTable(){
  $('#result-container').css("display", "block");
  var table = document.getElementById("result-shifts");
  for(var i = 0; i < shifts.length; i++){
    var row = table.insertRow();
    var cell_1 = row.insertCell();
    var cell_2 = row.insertCell();
    $(cell_1).text(shifts[i][0]);
    $(cell_2).text(shifts[i][1]);
  }
}
