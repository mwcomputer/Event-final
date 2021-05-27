
/********  Variablen **********/

/** Btn */
let btn = document.getElementById("trigBtn");

/** Status */
let status = true;

/********  Event-Listener **********/

// Webseite geladen --> auf (Anfangs)-Zustand umschalten
window.addEventListener("load",toggleStatus);

// Klick auf Btn  --> Zustand umschalten
btn.addEventListener("click",toggleStatus);

function toggleStatus() {
    status = !status;
    updateView();
}


/********  Änderung in View-Schicht **********/
function updateView() {
    if (status) { // night-mode
        switchClassName("night");
        switchBtnTxt("day");
    } else { // day-mode
        switchClassName("day");
        switchBtnTxt("night");
    }
}

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