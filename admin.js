document.addEventListener('DOMContentLoaded', () => {
  const isModerador = localStorage.getItem('moderador') === 'logado';

  if (isModerador) {
    const servicesSection = document.getElementById('service-list');
    const editor = document.getElementById('edit-services');

    if (servicesSection && editor) {
      const addBtn = document.createElement('button');
      addBtn.textContent = "Adicionar Serviço";
      addBtn.style.marginTop = "20px";
      addBtn.onclick = () => {
        const nome = prompt("Nome do novo serviço:");
        if (nome) {
          const div = document.createElement('div');
          div.className = 'service-item';
          div.textContent = nome;
          servicesSection.appendChild(div);
        }
      };
      editor.appendChild(addBtn);
    }
  }
});
