const X = "X";
const O = "O";
var mystatus = 1;

function eingabe(idNum) {

    var playfield = document.getElementById("field" + idNum);
    if (playfield.innerHTML === "") {
        if (mystatus === 1) {
            playfield.innerHTML = X;
            mystatus = 0;
        } else {
            playfield.innerHTML = O;
            mystatus = 1;
        }
    }

    let playfields = document.getElementsByClassName("field");

    let a1 = playfields[0].innerHTML;
    let a2 = playfields[1].innerHTML;
    let a3 = playfields[2].innerHTML;
    let a4 = playfields[3].innerHTML;
    let a5 = playfields[4].innerHTML;
    let a6 = playfields[5].innerHTML;
    let a7 = playfields[6].innerHTML;
    let a8 = playfields[7].innerHTML;
    let a9 = playfields[8].innerHTML;

    let msg = "<br>Congratulations!<br> You won!";
    let msgDiv = document.getElementById("msg");

    const spielfeld = document.getElementById("spielfeld");
    const div = document.createElement('div');

    if (a1 === a2 && a2 === a3 && ((a1 === X) || (a1 === O))) {
        spielfeld.appendChild(div).classList.add("line8");
        msgDiv.innerHTML = "<span class='sign'>" + a1 + "</span>" + " " + msg;
        setTimeout(showPopup(), 2);
    } else if (a4 === a5 && a5 === a6 && (a4 === O || a4 === X)) {
        spielfeld.appendChild(div).classList.add("line3");
        msgDiv.innerHTML = "<span class='sign'>" + a4 + "</span>" + " " + msg;
        setTimeout(showPopup(), 2);
    } else if (a7 === a8 && a8 === a9 && (a7 === O || a7 === X)) {
        spielfeld.appendChild(div).classList.add("line7");
        msgDiv.innerHTML = "<span class='sign'>" + a7 + "</span>" + " " + msg;
        setTimeout(showPopup(), 2);
    } else if (a1 === a4 && a4 === a7 && (a1 === O || a1 === X)) {
        spielfeld.appendChild(div).classList.add("line6");
        msgDiv.innerHTML = "<span class='sign'>" + a1 + "</span>" + " " + msg;
        setTimeout(showPopup(), 2);
    } else if (a2 === a5 && a5 === a8 && (a2 === O || a2 === X)) {
        spielfeld.appendChild(div).classList.add("line4");
        msgDiv.innerHTML = "<span class='sign'>" + a2 + "</span>" + " " + msg;
        setTimeout(showPopup(), 2);
    } else if (a3 === a6 && a6 === a9 && (a3 === O || a3 === X)) {
        spielfeld.appendChild(div).classList.add("line5");
        msgDiv.innerHTML = "<span class='sign'>" + a3 + "</span>" + " " + msg;
        setTimeout(showPopup(), 2);
    } else if (a1 === a5 && a5 === a9 && (a1 === O || a1 === X)) {
        spielfeld.appendChild(div).classList.add("line2");
        msgDiv.innerHTML = "<span class='sign'>" + a1 + "</span>" + " " + msg;
        setTimeout(showPopup(), 2);
    } else if (a3 === a5 && a5 === a7 && (a3 === O || a3 === X)) {
        spielfeld.appendChild(div).classList.add("line1");
        msgDiv.innerHTML = "<span class='sign'>" + a3 + "</span>" + " " + msg;
        setTimeout(showPopup(), 2);
    }
}

function showPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "block";
}

function clearAll() {
    let field = document.getElementsByClassName("field");

    for (let i = 0; i < field.length; i++) {
        field[i].innerHTML = "";
    }

    for (let i = 1; i < 9; i++) {
        let elements = document.getElementsByClassName("line" + i);
        for (let j = 0; j <= elements.length; j++) {
            if (typeof elements[j] !== 'undefined') {
                elements[j].remove();
            }
        }
    }

    buttonClose();
}

function buttonClose() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}
