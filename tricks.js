function getPlayerName() {
    return localStorage.getItem('userName') ?? 'Unknown User';
}

const playerName = document.querySelector('.User');
playerName.textContent = this.getPlayerName();

setInterval(() => {
    const notificationAlert = document.querySelector('#notification');
    notificationAlert.innerHTML =
      `<li><span class="user-name">Jack</span> learned a new trick!</li>` +
      notificationAlert.innerHTML;
  }, 5000);