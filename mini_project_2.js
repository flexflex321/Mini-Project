function Test() {
    let score = 0;
    let music = prompt("Do you eat food? (yes / no)");
    if (music.toLowerCase() === "yes") {
        score = score + 1;
    }
    let fun = (prompt("Do you have fun?"));
    if (fun.toLowerCase()==="yes") {
        score = score + 1;
    }
    let tired = prompt("Do you get emotional? (yes / no)");
    if (tired.toLowerCase() === "yes") {
        score = score + 1;
    }
    let sleepHours = parseInt(prompt("How many hours do you sleep per day?"));
    if (sleepHours >= 6) {
        score = score + 1;}
    console.log("Final Score:", score);
    if (score >= 3) {
        alert("You are definitely human.");
    } 
    else if (score >= 1) {
        alert("Half human, half robot.");
    } 
    else {
        alert("Robot detected.");
    }
}