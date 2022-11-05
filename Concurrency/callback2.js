// Student in Pakistan, gets 95%. Comment should be "You got an ", grade, ": Zabardast!"
// Student in US, gets 95%. Comment should be "You got an ", grade, ": Perfect!"

function unitedstates(grade) {
  switch (true) {
    case grade === "A+":
      console.log("You got an ", grade, ": Perfect!");
      break;
    case grade === "A":
      console.log("You got an ", grade, ": Excellent!");
      break;
    case grade === "B":
      console.log("You got a ", grade, ": Good Job!");
      break;
    case grade === "C":
      console.log("You got a ", grade, ": Ok!");
      break;
    case grade === "D":
      console.log("You got a ", grade, ": Need to improve!");
      break;
    default:
      console.log("An", grade, ": Oops. Try again!");
  }
}

function pakistan(grade) {
  switch (true) {
    case grade === "A+":
      console.log("You got an ", grade, ": Zabardast!");
      break;
    case grade === "A":
      console.log("You got an ", grade, ": عمدہ!");
      break;
    case grade === "B":
      console.log("You got a ", grade, ": bohot khoob :)");
      break;
    case grade === "C":
      console.log("You got a ", grade, ": Ok!");
      break;
    case grade === "D":
      console.log("You got a ", grade, ": Need to improve!");
      break;
    default:
      console.log("An", grade, ": Oops. Try again!");
  }
}

function getGrade(percentage, callback) {
  let grade;
  switch (true) {
    case percentage >= 90:
      grade = "A+";
      break;
    case percentage >= 80:
      grade = "A";
      break;
    case percentage >= 70:
      grade = "B";
      break;
    case percentage >= 60:
      grade = "C";
      break;
    case percentage >= 50:
      grade = "D";
      break;
    default:
      grade = "F";
  }
  callback(grade);
}

getGrade(95,unitedstates)