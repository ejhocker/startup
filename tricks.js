function getPlayerName() {
    return localStorage.getItem('userName') ?? 'Unknown User';
}

const playerName = document.querySelector('.user-name');
playerName.textContent = this.getPlayerName();