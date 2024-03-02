function changeImage(id) {
    if (document.getElementById(id).src === "emptyBone.JPG"){
        document.getElementById(id).src = "yellowBone.JPG";
    } else {
        document.getElementById(id).src = "emptyBone.JPG";
    }
}