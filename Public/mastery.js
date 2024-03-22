function alreadyLearned() {
    let trickIdList = ["checkSit", "checkStay", "checkLayDown", "checkRollover", "checkShake", "checkSpin", "checkTouch", "checkSpeak", "checkSitPretty"]
    for (var i = 0; i < trickIdList.length; i++){
        let isChecked = localStorage.getItem(trickIdList[i]);
        if (isChecked === "true") {
            changeImage(trickIdList[i]);
        }
    }
}

function changeImage(id) {
    document.getElementById(id).src = "Pictures/yellowBone.JPG";
    localStorage.setItem(id, true);
}

fetch('http://dog-api.kinduff.com')
  .then((response) => response.json())
  .then((jsonResponse) => {
    document.querySelector.id("dogFact").textContent = JSON.stringify(
        response);
  });