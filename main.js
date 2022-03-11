const div = document.createElement("div")
const h3 = document.createElement("h3")
const tabla = document.createElement("table")



  for(let i = 0 ;i <= 3; i++){
    const tr = document.createElement("tr")
    
    
    for(let j = 0 ;j <= 9; j++){
      const td = document.createElement("td")
      tr.appendChild(td)
      tabla.appendChild(tr)
    }
    }
  




h3.textContent = "hola este es un h3 desde javascript"
div.appendChild(h3)
div.appendChild(tabla)
document.body.appendChild(div) 