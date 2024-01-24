let button =document.getElementById("button");
let image =document.getElementById("image");
let number =document.getElementById('number');
let name =document.getElementById('Name');


const changePokemon =async() => {

    let randomNum = Math.ceil(Math.random() * 150)+1; // [0,1[   entre 0  ... 0.9999999    ( entre 1 et 151)

    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNum}`;

    let data=await fetch(requestString);

    let response= await data.json();
    console.log(response);

    image.src = response.sprites.front_default;
    number.textContent=`#${response.id}`;
    name.textContent=response.name;

};

changePokemon();
button.addEventListener("click",changePokemon);