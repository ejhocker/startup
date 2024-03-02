function getPlayerName() {
    return localStorage.getItem('userName') ?? 'Unknown User';
}

const playerName = document.querySelector('.User');
playerName.textContent = this.getPlayerName();