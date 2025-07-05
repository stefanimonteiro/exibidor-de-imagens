const form = document.getElementById('imageForm');
const clearBtn = document.getElementById('clearBtn');
const imageContainer = document.getElementById('imageContainer');
const errorDiv = document.getElementById('error');
const errorIcon = document.getElementById('errorIcon');
const errorText = document.getElementById('errorText');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const link = document.getElementById('imageLink').value.trim();
  clearError();

  if (!isValidImageURL(link)) {
    showError('Insira um link válido de imagem (termina com .jpg, .png, .gif etc.)');
    return;
  }

  displayImage(link);
});

clearBtn.addEventListener('click', () => {
  imageContainer.innerHTML = '';
  document.getElementById('imageLink').value = '';
  clearError();
});

function isValidImageURL(url) {
  return /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url);
}

function displayImage(src) {
  imageContainer.innerHTML = '';

  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Imagem carregada';
  img.onload = () => img.classList.add('show');
  img.onerror = () => {
    showError('Erro ao carregar a imagem. Verifique o link.');
  };

  imageContainer.appendChild(img);
}

function showError(message) {
  errorIcon.style.display = 'inline';
  errorText.textContent = message;
}

function clearError() {
  errorIcon.style.display = 'none';
  errorText.textContent = '';
}
