$(document).ready(function(){

  $("#get_color").click(function(){
    // intercepts the default behavior which is to click

    event.preventDefault();
    $.ajax({
      type: "POST",
      url: "/color",
      dataType: "json"
      })
    .done(function(result){
      console.log(result.cell);
      $('li').eq(result.cell).css('background-color', result.color);

    }).fail(function(){
      console.log("failed");
    });

  });
});