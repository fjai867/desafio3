
document.getElementById("dia").addEventListener('click',traerDatos)
document.getElementById("wk").addEventListener('click',traerDatos1)
document.getElementById("mt").addEventListener('click',traerDatos2)


const xhttp=new XMLHttpRequest();
let datos2
xhttp.open('GET','data.json',true);
xhttp.send();
xhttp.onreadystatechange= function(){

    if(this.readyState== 4 && this.status== 200){
           
        let datos=JSON.parse(this.responseText);
        console.log(datos)
        datos2=datos
        }
}

const ides=["work","play","study","exercice","social","self"]

function traerDatos(){ 
  
let numId=0
for (let item of datos2) {
    
    document.getElementById(ides[numId]).innerHTML=
        `
        <h3>${item.timeframes.daily.current} hrs </h3>
        <h5 class="pie">last week ${item.timeframes.daily.previous} hrs </h5>
        ` 
    numId++; 
        } 
}

function traerDatos1(){ 
  
    let numId=0
    for (let item of datos2) {
           
        document.getElementById(ides[numId]).innerHTML=
            `
            <h3>${item.timeframes.weekly.current} hrs </h3>
            <h5 class="pie">last week ${item.timeframes.weekly.previous} hrs </h5>
            ` 
        numId++; 
            } 
    }

    function traerDatos2(){ 
  
        let numId=0
        for (let item of datos2) {
               
            document.getElementById(ides[numId]).innerHTML=
                `
                <h3>${item.timeframes.monthly.current} hrs </h3>
                <h5 class="pie">last week ${item.timeframes.monthly.previous} hrs </h5>
                ` 
            numId++; 
                } 
        }   

    