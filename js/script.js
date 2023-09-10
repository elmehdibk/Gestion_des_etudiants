import Etudiants from "./etudiant.js";

const displayEtudiants = async function(){
    return Etudiants.all().then(function(res){
       return res.map((e)=>{
            const {id,name,date,note} = e

            return `
                <tr>
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${date}</td>
                    <td>${note}</td>
                    <td></td>

                </tr>
            
            `
        })
    })
}

console.log(displayEtudiants().then(data=> console.log(data))); 