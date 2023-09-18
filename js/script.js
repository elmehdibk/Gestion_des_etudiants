import Etudiants from "./etudiant.js";

const displayEtudiants = async function(){
    return Etudiants.all().then(function(res){
       return res.map((e)=>{
            const {id,name,date,note} = e

            const etudiant = new Etudiants(name,date,note)
            
            return `
                <tr>
                    <td>${id}</td>
                    <td>${etudiant.name}</td>
                    <td>${etudiant.getAge()}</td>
                    <td><span class="badge ${etudiant.isAdmitted()?'bg-success':'bg-danger'}">${etudiant.note}/${etudiant.MAX_NOTE()}</span></td>
                    <td><button class='btn btn-danger delete' onclick='deleteEtudiant(${id})' >Suprimer</button></td>

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

window.deleteEtudiant =(id)=>{
    Etudiants.deleteEtudiants(id).then(()=>alert('etudiant supprime'))
    // console.log(id);
}
const renderEtidiants =()=>{
    
    const body = document.querySelector('.liste-etudiants')
    
    displayEtudiants().then(data=> {
        body.innerHTML=data.join(' ')
        init()}); 
        
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

    // const deleteButton =document.querySelector('.delete')
    // deleteButton.addEventListener('click',(id)=>{
    //     deleteEtudiant(id)
    // })
}
renderEtidiants()