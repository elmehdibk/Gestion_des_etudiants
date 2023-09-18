import {ENDPOINT} from './constants.js'
export default class Etudiants{
    constructor(name,age,note){
        this.name=name
        this.age=age
        this.note=note

    }
    MAX_NOTE=()=> 20
    getAge = ()=> new Date().getFullYear() - new Date(this.age).getFullYear() 
    isAdmitted =()=> this.note >= 10 
  static all = async function(){ 
       const res= await fetch(ENDPOINT)
       const etudiants= await res.json()
        return etudiants
        }
        // http://localhost:3000/edtudiants(POST)
   addEtudiants =async function(){ 
        const res= await fetch(ENDPOINT,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name:this.name,
                date:this.age,
                note:this.note
            })
        }
            )
        console.log(res)
         return res
         }


        // http://localhost:3000/edtudiants(DELETE)
        static deleteEtudiants =async function(id){ 
            const res= await fetch(ENDPOINT+'/'+id,{
                method:'DELETE',
                headers:{
                    'Content-Type':'application/json'
                },
        
            })
            // console.log(res)
             return res
             }
}