
            // <button id="color">My Favorite Color</button>
            // <button id="place">My Favorite Place</button>
            // <button id="ritual">My Favorite Ritual</button>
       
         
function addColor(event){
    alert ('Most shades of blues and greens')
}

let favColor = document.querySelector('#color');
favColor.addEventListener('click', addColor);

function addPlace(event){
    alert ('The western half of the PNW')
}

let favPlace=document.querySelector('#place');
favPlace.addEventListener('click', addPlace);

function addRitual(event){
    alert ("I can't think of any favorite rituals")
}

let favRitual=document.querySelector('#ritual');
favRitual.addEventListener('click', addRitual)
