const choices = document.querySelectorAll('.choice');
const resultText = document.getElementById('result');
const resetButton = document.getElementById('reset');

const options = ['piedra', 'papel', 'tijera'];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return '¡Es un empate! 🤝';
  }
  if (
    (playerChoice === 'piedra' && computerChoice === 'tijera') ||
    (playerChoice === 'papel' && computerChoice === 'piedra') ||
    (playerChoice === 'tijera' && computerChoice === 'papel')
  ) {
    return '¡Ganaste! 🎉';
  }
  return 'Perdiste... 😢';
}

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const playerChoice = choice.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    resultText.textContent = `Elegiste ${playerChoice}, la computadora eligió ${computerChoice}. ${result}`;
  });
});

resetButton.addEventListener('click', () => {
  resultText.textContent = '¡Haz tu elección!';
});
