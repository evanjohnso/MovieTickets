//Business Logic
function MovieSpec (title, time, age) {
  this.feature = title;
  this.time = time;
  this.age = age;
}

MovieSpec.prototype.price = function() {
  return this.time + this.age;
}

//User Interface Logic
$(document).ready(function() {
  $('#movies').submit(function(event) {
    event.preventDefault();

    var featureTitle = $('#features').val();
    var movieTime = parseInt( $("input:radio[name=time]:checked").val() );
    var userAge = parseInt( $("input:radio[name=age]:checked").val() );

    var newPerson = new MovieSpec(featureTitle, movieTime, userAge);

    console.log(newPerson.price() );
    console.log(newPerson);



  });
});
