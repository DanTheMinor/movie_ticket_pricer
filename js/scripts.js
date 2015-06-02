function Ticket(name, newRelease){
  this.name = name;
  this.time = [];
  this.price =  12;
  this.newRelease = newRelease;
}

Ticket.prototype.setPrice = function(time, age) {
  var newPrice = this.price;
  if (age <= 12) {
    newPrice -= 3;
  }
  else if (age >= 55) {
    newPrice -= 2;
  }
  var timeArray = time.split("");
  if (parseInt(timeArray[0]) < 1) {
    newPrice -= 2;
  }
  else if (parseInt(timeArray[1]) < 8) {
    newPrice -= 2;
  }
  if (this.newRelease === true) {
    newPrice += 8;
  }


  return newPrice;
};


$(function(){
  $(".add-time").click(function(){
    $(".new-time").append('<input type="text" required class="input-time form-control" style= "width:300">' +
                            '<br>');
  });

  $("form#ticket").submit(function(event) {
    event.preventDefault();
    inputtedName = $("#input-name").val();
    inputtedRelease = $("#input-release").val();

    var newMovie = new Ticket(inputtedName, inputtedRelease);


    $(".new-time").each(function() {
      var inputtedTime = $(this).find("input.input-time").val();

      newMovie.time.push(inputtedTime);

      // newMovie.time.forEach(function(element)
      //   var newPrice = this.price(element);
      // )
     });

    $(".movie").append("<li>" + newMovie.name + "</li>");


   //debugger;


      $(".show-movie").show()
  });


});
