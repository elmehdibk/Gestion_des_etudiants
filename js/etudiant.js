import {ENDPOINT} from './constants.js'
export default class Etudiants{
    constructor(nom,age,note){
        this.nom=nom
        this.age=age
        this.note=note

    }

  static all = async function(){ 
       const res= await fetch(ENDPOINT)
       const etudiants= await res.json()
        return etudiants
        }

   addEtudiants =async function(){ 
        const res= await fetch(ENDPOINT,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name:this.nom,
                date:this.age,
                note:this.note
            })
        }
            )
        console.log(res)
         return res
         }
}