const div = document.querySelector("div")
const h3 = document.createElement("h3")
const tabla = document.createElement("table")
const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2")


const boton = document.getElementById("enviar")
const boton2 = document.getElementById("limpiar")

boton.addEventListener("click",(e)=>{
  e.preventDefault()

  let for1 = parseInt(numero1.value) 
  let for2 = parseInt(numero2.value)

  for( i = 0 ;i <= for1; i++){
    const tr = document.createElement("tr")
    
    
    for(let j = 0 ;j <= for2; j++){
      const td = document.createElement("td")
      td.textContent = j
      tr.appendChild(td)
      tabla.appendChild(tr)
    }
    }

    numero1.value= " "
    numero2.value= " "
})

boton2.addEventListener("click",()=>{
  
})




tabla.classList.add("tabla")
div.appendChild(tabla)
document.body.appendChild(div) 