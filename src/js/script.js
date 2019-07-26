class Participant {
  constructor(name, shifts, number_of_shifts) {
    this.name = name;
    this.shifts = shifts;
    this.number_of_shifts = number_of_shifts;
  }
}

var participants = new Array();
var current_iterations = 0;

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
    participants.push(new Participant($("#names").val(), arr, 0));
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
    alert($( this ).text());
  });

  $("#next-shift").click(function(){
    nextShift();
  });
});

function nextShift(){
  $("#temp-shifts tbody").empty();
  var temp_participants = {};
  for(var i = 0; i < participants.length; i++){
    if(participants[i].shifts[current_iterations] == 1){
      temp_participants[participants[i].name] = participants[i].number_of_shifts;
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
