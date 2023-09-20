import Etudiants from "./etudiant.js";

let filterSettings={
    'filterBy':'id',
    'desc':false,
}
const desc =document.querySelector('#desc')

desc.addEventListener('click',()=>{
        filterSettings.desc=!filterSettings.desc;
        console.log(filterSettings.desc); 
        renderEtidiants()
    })
const displayEtudiants = async function(){
    return Etudiants.all().then(function(res){
       
            
            if (filterSettings.desc) {
                desc.innerHTML='&#8595;'
                res.sort((a,b)=>b[filterSettings.filterBy]-a[filterSettings.filterBy]);
                
        }else{
            
            desc.innerHTML='&#8593;'
            res.sort((a,b)=>a[filterSettings.filterBy]-b[filterSettings.filterBy]);
           
        }

    
    
    

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
    Etudiants.deleteEtudiants(id)
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

}

renderEtidiants()