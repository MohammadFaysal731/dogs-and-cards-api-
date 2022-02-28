const loadDogs = () => {
    fetch('https://api.thedogapi.com/v1/breeds')
        .then(res => res.json())
        .then(data => displayDogs(data))
}

const displayDogs = dogsList => {
    console.log(dogsList)
    const main = document.getElementById('main');
    const frist80dogs = dogsList.slice(20, 100);
    for (const dog of frist80dogs) {
        // console.log(dog.namse)
        const div = document.createElement('div');
        div.className = "col-lg-4";
        div.innerHTML = `
        <h3>${dog.name}</h3>
        <p>${dog.temperament}</p>
        <h5>${dog.weight.imperial}</h5>
       <img  width="400px" height="250px" src="${dog.image.url}">
        `;
        main.appendChild(div);
    }
}
