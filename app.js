var marks = 150;

if (marks >= 0 && marks <40){
    console.log("You failed the Exam.");
}else if(marks >= 40 && marks < 65){
    console.log("You passed the Exam.");
}else if(marks >= 65 && marks < 80){
    console.log("You got Credit.");
}else if (marks >= 80 && marks <= 100){
    console.log("You got Distinction.");
}else{
    console.log("Error. Try again.");
}