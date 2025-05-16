document.addEventListener('DOMContentLoaded', () => {
  const isAdmin = localStorage.getItem('moderador') === 'logado';
  if (isAdmin) {
    document.querySelectorAll('[data-editable="true"]').forEach(el => {
      el.contentEditable = true;
      el.style.border = '1px dashed orange';
      el.style.padding = '5px';
    });

    const editServices = document.getElementById('edit-services');
    if (editServices) {
      const btn = document.createElement('button');
      btn.textContent = 'Adicionar Serviço';
      btn.onclick = () => {
        const serviceList = document.getElementById('service-list');
        const newService = document.createElement('div');
        newService.className = 'service-item';
        newService.textContent = prompt('Novo serviço:');
        newService.setAttribute('data-editable', 'true');
        newService.contentEditable = true;
        newService.style.border = '1px dashed orange';
        newService.style.padding = '5px';
        serviceList.appendChild(newService);
      };
      editServices.appendChild(btn);
    }
  }
});