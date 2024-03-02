function alreadyLearned() {
    let trickIdList = ["checkSit", "checkStay", "checkLayDown", "checkRollover", "checkShake", "checkSpin", "checkTouch", "checkSpeak", "checkSitPretty"]
    for (var i = 0; i < trickIdList.length; i++){
        let isChecked = localStorage.getItem(trickIdList[i]);
        if (isChecked === true) {
            changeImage(trickIdList[i]);
        }
    }
}

function changeImage(id) {
    document.getElementById(id).src = "yellowBone.JPG";
    localStorage.setItem(id, true);
}

function checkReport() {
    let trickIdList = ["checkSit", "checkStay", "checkLayDown", "checkRollover", "checkShake", "checkSpin", "checkTouch", "checkSpeak", "checkSitPretty"]
    let report;
    for (var i = 0; i < trickIdList.length; i++){
        if (localStorage.getItem(trickIdList[i] === true)) {
            report = "You have previously mastered the following tricks: " + trickIdList[i];
        } else {
            report = "Master a trick by clicking a bone!";
        }
    }
    document.querySelector("#check-Report").textContent = report;
}
checkReport();