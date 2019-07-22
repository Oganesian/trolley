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
    alert(arr);
  });
});
