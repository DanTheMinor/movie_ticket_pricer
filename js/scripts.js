//ticket attributes
//time, new-release, age, name, price

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
  return newPrice;
};
//inputtedTime = whatever
//inputtedName = whatever
//inputtedPrice = initial
// newTicket.where(name = "django").time =
//
// var newTime = {time: 630}
//
// newMovie.time.push(newTime)
//
// newMovie.setTime(630);
//
// var setTime = function(time) {
//   this.time.push(time)
// }
