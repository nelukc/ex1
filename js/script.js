// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
var birthdayYear  = document.getElementById("birthYearInput");

/*setInterval("runCountDown()",1000);
/*
function runCountDown(){
    // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days + "d " ;
  document.getElementById("hours").innerHTML = hours + "h ";
  document.getElementById("minutes").innerHTML = minutes + "m ";
  document.getElementById("second").innerHTML = seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}*/

function calculateTime(){
    setInterval("calculateRemainingTime()",1000);
}



function calculateRemainingTime(){
    // Get the birth year from the input box
    const birthYear = parseInt(birthdayYear.value);
    // Get the current date
    const currentDate = new Date();

    // Calculate the next birthday
    // get nextbirthday date 
    const nextBirthday = new Date(birthYear, currentDate.getMonth(), currentDate.getDate());
    // already pass next year
    if (nextBirthday < currentDate) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }

  const timeRemaining = nextBirthday - currentDate;
  console.log("time remaining" + timeRemaining);
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days + "d " ;
  document.getElementById("hours").innerHTML = hours + "h ";
  document.getElementById("minutes").innerHTML = minutes + "m ";
  document.getElementById("second").innerHTML = seconds + "s ";


}