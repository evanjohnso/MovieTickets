//Business Logic
function MovieSpec (title, time, age, number) {
  this.feature = title;
  this.time = time;
  this.age = age;
  this.quantity = number;
}

MovieSpec.prototype.movieTitle = function () {
  if (this.time === 10) {
    return "Evening ";
  } else if (this.time === 8){
    return "Matinee ";
  } else {
    return "3D ";
  }
}

MovieSpec.prototype.price = function() {
  return (this.time + this.age) * this.quantity;
}

//User Interface Logic
$(document).ready(function() {
  $('#movies').submit(function(event) {
    event.preventDefault();

    var featureTitle = $('#features').val();

    var movieTime = parseInt( $("input:radio[name=time]:checked").val() );
    var userAge = parseInt( $("input:radio[name=age]:checked").val() );
    var quantity = $('#ticketNumber').val();

    var newPerson = new MovieSpec(featureTitle, movieTime, userAge, quantity);


    $(".receipt").show();
    $("#filmTitle").text(newPerson.feature);
    $("#filmTime").text(newPerson.movieTitle() );
    $("#filmPrice").text(newPerson.price());

  });
});
