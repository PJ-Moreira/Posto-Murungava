// Login simples com LocalStorage (fake auth)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      if (email === 'admin@murungava.com' && password === '1234') {
        localStorage.setItem('moderador', 'logado');
        window.location.href = 'index.html';
      } else {
        alert('Credenciais inválidas!');
      }
    });
  }
});
