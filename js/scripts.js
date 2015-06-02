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
  else if ( (parseInt(timeArray[0]) === 1) && (parseInt(timeArray[1]) < 8)) {
    newPrice -= 2;
  }

  if (this.newRelease === 'true') {
    newPrice += 8;
  }
  return newPrice;
};

function clearFields() {
  $("#input-name").val("");
  $("#input-release").val("true");
  $(".new-time").replaceWith( '<div class="new-time">' +
                                '<label for="input-time">What is a time your movie will be playing (in military):</label>' +
                                '<input type="text" class="input-time form-control" style= "width:300">' +
                                '<br>' +
                                '</div>');

}



$(function(){
  $(".add-time").click(function(){
    $(".new-time").append('<div class="new-time">' +
                            '<input type="text" class="input-time form-control" style= "width:300">' +
                            '<br>' +
                          '</div>');
  });

  $("form#ticket").submit(function(event) {
    event.preventDefault();
    inputtedName = $("#input-name").val();
    inputtedRelease = $("#input-release").val();

    var newMovie = new Ticket(inputtedName, inputtedRelease);


    $(".new-time").each(function() {
      var inputtedTime = $(this).find("input").val();
      newMovie.time.push(inputtedTime);

     });


    $(".movies").append("<li>" + "<span class=movie>" + newMovie.name + "</span>" + "</li>");


    $(".movie").last().click(function() {
        $(".display-times").show();
        $(".show-times h2").text(newMovie.name);

        $(".display-times").text("");

        newMovie.time.forEach(function(element) {
          $(".display-times").append("<li>" +'<a href="#openModal">' + "<span class=time>"  + element + "</span>" + "</a>" + "</li>");

          $(".time").last().click(function() {
              $(".show-prices").show();
              $(".overlay").show(); //THIS IS FOR THE MODAL
              $("openModal").show();
              $("#kids").text(newMovie.setPrice(element, 12));
              $("#adults").text(newMovie.setPrice(element, 13));
              $("#seniors").text(newMovie.setPrice(element, 55));

          });
        });


    });

    clearFields();

      $(".show-movies").show()
  });


});
