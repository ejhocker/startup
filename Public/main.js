function login() {
    const nameUser = document.querySelector("#name");
    localStorage.setItem("userName", nameUser.value);
    window.location.href = "tricks.html";
  }