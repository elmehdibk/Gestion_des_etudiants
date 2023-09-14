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
                    <td><button class='btn btn-danger'>Suprimer</button></td>

                </tr>
            
            `
        })
    })
}

const addEtudiant =()=>{
        
    const [name,date,note]=document.querySelectorAll('#name,#date,#note')
    const etudiants =new Etudiants(name.value,date.value,note.value)
    etudiants.addEtudiants(); 


}
const renderEtidiants =()=>{

    const body = document.querySelector('.liste-etudiants')

    displayEtudiants().then(data=> body.innerHTML=data.join(' ')); 
}

const init=function(){
    const refreshButton=document.querySelector('#Refresh')
    refreshButton.addEventListener('click',()=>{
        renderEtidiants()
    })
    const addButton=document.querySelector('#add')
    addButton.addEventListener('click',(event)=>{
        addEtudiant(event)
    })
}
init()
renderEtidiants()