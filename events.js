


/** Btn */
let btn = document.getElementById("trigBtn");

//ausgabe(btn);

btn.addEventListener("click",test);


/********  Tools **********/
function test() {
    ausgabe("hi");
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