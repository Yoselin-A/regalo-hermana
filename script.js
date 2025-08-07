const expectedDate = '2025-08-07'; // Formato YYYY-MM-DD

function unlock() {
  const input = document.getElementById('dobInput').value;
  if (input === expectedDate) {
    document.getElementById('lock-screen').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
  } else {
    alert('¡Esa no es tu fecha de cumple! 🎂 Intenta de nuevo.');
  }
}

function showCard() {
  document.getElementById('card-content').classList.remove('hidden');
  document.getElementById('gallery-content').classList.add('hidden');
}

function showGallery() {
  document.getElementById('gallery-content').classList.remove('hidden');
  document.getElementById('card-content').classList.add('hidden');
}