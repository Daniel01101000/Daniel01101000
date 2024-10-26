let previousTitle = document.title

window.addEventListener('blur', () => {
    previousTitle = document.title
    document.title = 'No te vayas!!!'
});

window.addEventListener('focus', () => {
  document.title = previousTitle
});


async function apiRick(pagina) {
    let url = `https://rickandmortyapi.com/api/character/?page=${pagina}`;
    const api = await fetch(url);
    const data = await api.json();
    console.log(data);
    
    const divRes = document.querySelector("#resultado");
    divRes.innerHTML = "";


    data.results.forEach(character => {
    const divItem = document.createElement('div');
    divItem.innerHTML = `
    <div class="character-card">
    <img src="${character.image}" alt="Personaje">
    <p>${character.name}</p>
    </div>`
    divRes.appendChild(divItem);
   
  });
    
}

apiRick(1);


const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

// Agregamos un evento de clic al icono

    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('show'); // Activa o desactiva el menú al hacer clic
    });
