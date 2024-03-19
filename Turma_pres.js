import {Truma} from './Turma'

class Truma_pres extends Truma {

    #frequencia =''

    constructor (frequencia){
        super({codigo,nota})
        this.#frequencia = frequencia
    }

    get frequencia(){
        return this.#frequencia
    }

    set frequencia(frequencia){
        this.#frequencia = frequencia
    }

    aprovado(){
        if(frequencia > 80 && noda >= 6){
            return true
        }
        else{
            return false
        }
    }
}