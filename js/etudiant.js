import {ENDPOINT} from './constants.js'
export default class Etudiants{
    constructor(nom,age,note){
        this.nom=nom
        this.age=age
        this.note=note

    }

  static all = function(){ 
       let etudiants=  fetch(ENDPOINT).then(res=>res.json())
          .then(etudiants=>console.log(etudiants) )
        }
}