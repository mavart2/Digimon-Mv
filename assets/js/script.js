

var contenido = document.querySelector("#contenido")

fetch(`https://digimon-api.vercel.app/api/digimon`)
.then(response => response.json())
.then(datos => {
    tabla(datos)
})

function tabla (datos){
    contenido.innerHTML = ""

    for(let temp of datos){
        contenido.innerHTML+=
       `
        <tr>
                <th scope="row">${temp.name}</td>
                <td>${temp.img}</td>
                <td>${temp.level}</td>
        </tr>
    
        ` 
        
         if(temp.id == 2) {
             break

         }

    }

   
}



const searchDigimon = event => {
    event.preventDefault();
    
    const {value} = event.target.digimon;
    
    console.log(value)
    fetch(`https://digimon-api.vercel.app/api/digimon/name/${value}`
    )
    .then(data => data.json())
    
    .then(response => renderDigimonData(response[0]))
    
    

}



const renderDigimonData = data =>{
    
    
    
    var container = document.getElementById("card_contenedor")
    const { name, img, level} = data;
    if (data.length === 0) {
        alert('No se encuentra');
    }
    var card=`
    <div class="card" style="max-width: 580px; padding-left:10%;">
        <img src="${img}" class="card-img-top" alt="...">
        <div class="card-body">
         <h5 class="card-title">${name}</h5>
         <p>level: ${level}</p>
    </div>
  </div>`
  
    console.log(data);
    container.innerHTML = card

}



