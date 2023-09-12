import Etudiants from "./etudiant.js";

const displayEtudiants = async function(){
    return Etudiants.all().then(function(res){
       return res.map((e)=>{
            const {id,name,date,age,note} = e

            return `
                <tr>
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${date}</td>
                    <td>${age}</td>
                    <td>${note}</td>
                    <td></td>

                </tr>
            
            `
        })
    })
}

const renderEtidiants =()=>{

    const body = document.querySelector('.liste-etudiants')

    displayEtudiants().then(data=> body.innerHTML=data); 
}
renderEtidiants()