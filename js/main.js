

//SELECCIÓN DE EQUIPO (cuartos de final) - team selection (quarterfinals)


    const selectedButton = document.getElementById ("button-touchme")
    const containerSelector = document.getElementById ("container") 
    const teamCreated = document.createDocumentFragment ()
    const divLogo = document.createElement ("div")
    const showTeams = document.createElement ("img")
    const fullTeams = equiposTotal
    

    function seleccionEquipo (datos) {
        return datos [Math.floor (Math.random () * datos.length)]
    }
  
    console.log (seleccionEquipo (fullTeams).equipos)

    selectedButton.addEventListener("click", () => {
        showTeams
        showTeams.src = seleccionEquipo (fullTeams).escudo
        divLogo.appendChild (showTeams)
        divLogo.classList.add ("teamLogo")
        teamCreated.appendChild (divLogo)
        containerSelector.appendChild (teamCreated)
        
  })

  