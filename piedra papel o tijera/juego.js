function playGame(Usuario) {
    const choices = ['piedra', 'papel', 'tijeras'];
  
    if (!Usuario) {
      Usuario = choices[Math.floor(Math.random() * 3)];
    }
  
    const Computadora = choices[Math.floor(Math.random() * 3)];
  
    // Mostrar elecciones
    document.getElementById('user-choice').innerText = `Tu elección: ${Usuario}`;
    document.getElementById('computer-choice').innerText = `Elección de la computadora: ${Computadora}`;
  
    // Determinar el ganador
    let result = '';
    if (Usuario === Computadora) {
      result = 'Es un empate.';
    } else if (
      (Usuario === 'piedra' && Computadora === 'tijeras') ||
      (Usuario === 'papel' && Computadora === 'piedra') ||
      (Usuario === 'tijeras' && Computadora === 'papel')
    ) {
      result = '¡Ganaste!';
    } else {
      result = 'Perdiste. :(';
    }
  
    document.getElementById('result').innerText = `Resultado: ${result}`;
  }
  
  function resetGame() {
    document.getElementById('user-choice').innerText = 'Tu elección: ';
    document.getElementById('computer-choice').innerText = 'Elección de la computadora: ';
    document.getElementById('result').innerText = 'Resultado: ';
  }
  