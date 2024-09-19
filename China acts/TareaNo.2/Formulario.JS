const lista = document.getElementById('lista');
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	const alias = document.getElementById('Alias').value;
	const correo = document.getElementById('Correo').value;
	const telefono = document.getElementById('Telefono').value;
	const apellido = document.getElementById('Apellido').value;
	const nombre = document.getElementById('Nombre').value;
	
	const listaItem = document.createElement('div');
	listaItem.classList.add('lista-item');
	listaItem.innerHTML = `
		${apellido}, ${nombre} (${alias}): ${telefono}, ${correo}
	`;
	
	lista.appendChild(listaItem);
	formulario.reset();
});
