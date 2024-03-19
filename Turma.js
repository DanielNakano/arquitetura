import {Aluno} from './Alunos'

class Truma {
    #codigo =''
    #nota = ''

    constructor ([codigo, nota]){
        this.#codigo = codigo
        this.#nota = nota
    }

    get codigo(){
        return this.#codigo
    }

    get nota(){
        return this.#nota
    }

    set codigo(codigo){
        this.#codigo = codigo
    }

    set nota(nota){
        this.#nota = nota
    }

    aprovado(){
    }

}

