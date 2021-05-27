
/********  Variablen **********/

/** Btn */
let btn = document.getElementById("trigBtn");

/** Status */
let status = true;

/********  Event-Listener **********/

btn.addEventListener("click",toggleStatus);

function toggleStatus() {
    status = !status;
    ausgabe(status);
}

/********  Tools **********/
function test() {
    let cond = (document.body.className == "day");
    if (cond) { // ???
         // night-mode
        switchClassName("night");
        switchBtnTxt("day");
    } else {
        // day-mode
        switchClassName("day");
        switchBtnTxt("night");

    }
   
}


/********  Änderung in View-Schicht **********/

// Modul: Umschaltung Klasse | Test:
//switchClassName("night");
//switchClassName("day");
function switchClassName(modeStr) {
    document.body.className = modeStr;
    document.body.children[0].className = modeStr;
    document.body.children[1].className = modeStr;
}

// Modul: Umschaltung BtnTxt | Test:
// switchBtnTxt("day");
// switchBtnTxt("night");
function switchBtnTxt(modeStr) {
    btn.innerHTML = modeStr;
}

/* Tools */
function ausgabe(outputStr) {
    console.log(outputStr);
}