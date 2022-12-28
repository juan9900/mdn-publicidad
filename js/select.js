
function profesiones(){
    let profesion = document.getElementById('profesion');
    let portafolio = document.getElementById('portafolio-diseño'); 
    let labelportafolio = document.getElementById('portafolio-label');
    let portafoliopdfLabel = document.getElementById('porfolio-pdf');
    let portafoliopdf = document.getElementById('portfolio-pdf-input');
    if(profesion.selectedIndex != 1 && profesion.selectedIndex != 3){
    portafolio.setAttribute("style", 'display:none');
    labelportafolio.setAttribute("style", 'display:none');
    portafoliopdfLabel.setAttribute("style", 'display:none');
    portafoliopdf.setAttribute("style", 'display:none');
    }else{
        portafolio.setAttribute("style", 'display:block');
        labelportafolio.setAttribute("style", 'display:block');
        portafoliopdfLabel.setAttribute("style", 'display:block');
        portafoliopdf.setAttribute("style", 'display:block');
    }
   }
   