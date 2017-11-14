$(function(){
  var val = 0;
  var interval = setInterval(function(){
    val = val + 1;

    $('#pd').progressbar({value: val});
    $('#parcent').text(val + '%');

    if(val == 100){
      clearInterval(interval);
    }

  },50);
});
