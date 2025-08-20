function stopMusic() {
  location.reload
}
function checkScore() {
    // alert("I am working");
    var songFail = new Audio ("./audio/audio-Fail F9.mp3")
    var songPass = new Audio ("./audio/audio-Pass E8.mp3")
    var songAverage = new Audio ("./audio/audio-Average D7.mp3")
    var songCredit = new Audio ("./audio/audio-Credit C.mp3")
    var songGood = new Audio ("./audio/audio-Good B.wav")
    var songExcellent = new Audio ("./audio/audio-Excellent A.wav")

  if (scoreOfUser.value == "") {
    console.log("Space cannot be blank");
    show.innerHTML = "Space can not be blank"
    show.style.color = "purple"
  }
  else if (scoreOfUser.value >= 0 && scoreOfUser.value <= 39) {
    console.log("You Failed - F9 😣");
    show.innerHTML = "You Failed - F9 😣";
    show.style.color = "red"
    songFail.play()
    scoreOfUser.value = "";
    

  }  
  else if (scoreOfUser.value >= 40 && scoreOfUser.value <= 44) {
    console.log("You passed - E8 😖");
    show.innerHTML = "You Passed - E8 😖";
    show.style.color = "crimson"
    songPass.play()
    scoreOfUser.value = "";
    
  }
  else if (scoreOfUser.value >= 45 && scoreOfUser.value <= 49) {
    console.log("You have an Average Score - D7 🤨");
    show.innerHTML = "You have an Average Score - D7 🤨";
    show.style.color = "orange"
    songAverage.play()
    scoreOfUser.value = "";
  }
  else if (scoreOfUser.value >= 50 && scoreOfUser.value <= 59) {
    console.log("You have a Credit Score - C 🙂");
    show.innerHTML = "You have a Credit Score - C 🙂";
    show.style.color = "chartreuse"
    songCredit.play()
    scoreOfUser.value = "";
  }
  else if (scoreOfUser.value >= 60 && scoreOfUser.value <= 69) {
    console.log("Good - B 😊");
    show.innerHTML = "Good - B 😊";
    show.style.color = "blue"
    songGood.play()
    scoreOfUser.value = "";
  }
  else if (scoreOfUser.value >= 70 && scoreOfUser.value <= 100) {
    console.log("Excellent - A 🤗");
    show.innerHTML = "Excellent - A 🤗";
    show.style.color = "green"
    songExcellent.play()
    songExcellent.play() = "";
    scoreOfUser.value = "";
  }
  else if (scoreOfUser.value < 0 || scoreOfUser.value > 100) {
    console.log("Invalid Score");
    show.innerHTML = "Invalid Score"
    show.style.color = "black"
    scoreOfUser.value = ""
  }
}