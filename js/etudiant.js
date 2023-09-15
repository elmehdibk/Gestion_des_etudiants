import {ENDPOINT} from './constants.js'
export default class Etudiants{
    constructor(name,age,note){
        this.name=name
        this.age=age
        this.note=note

    }

    getAge = ()=> new Date().getFullYear() - new Date(this.age).getFullYear() 

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
                name:this.name,
                date:this.age,
                note:this.note
            })
        }
            )
        console.log(res)
         return res
         }
}