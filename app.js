let names = [];

function agregarAmigo() {
    const nameInput = document.getElementById('amigo');
    const name = nameInput.value.trim();
    if (name) {
        names.push(name);
        ActualizarListaAmigos();
        nameInput.value = '';
    }
}

function ActualizarListaAmigos() {
    const nameList = document.getElementById('listaAmigos');
    nameList.innerHTML = '';
    names.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        nameList.appendChild(li);
    });
}

function sortearAmigo() {
    if (names.length > 0) {
        const randomIndex = Math.floor(Math.random() * names.length);
        const selectedName = names[randomIndex];
        document.getElementById('resultado').innerHTML = `<li>Tu amigo secreto es: ${selectedName}</li>`;
    } else {
        document.getElementById('resultado').innerHTML = '<li>Ups, no hay nombres en la lista, agrega por favor.</li>';
    }
}