let q1 = "Hva avgjør om en database er på 1NF?";
let q2 = "Hva avgjør om en database er på 2NF?";
let q3 = "Hva avgjør om en database er på 3NF?";

const questions = [q1, q2, q3];

let counter = 0;

//Print next question when Next button is clicked
function nextQ() {

    let clicked = true;

    while (clicked) {
        for (let i = counter; clicked === true; i++) {
            document.getElementById("question").innerHTML = questions[i];
            counter++;
            clicked = false;
            if (i === questions.length) {
                document.getElementById("question").innerHTML = "Det finnes ikke flere spørsmål!";
            }
        }
    }
}
