//exercicio3-4

let numero : number = 32


if(numero %2 == 0)
{
    console.log('Par')
}
else
{
    console.log('Impar')
}

//exercicio5

let largura: number = 8
let comprimento: number = 5

let area = (largura:number,comprimento:number) => largura * comprimento

console.log(`A Àrea é: ${area(largura,comprimento)}`)

//exercicio6export

export class Cubo
{
    constructor(public numerox:number){}
    
    aocubo(){Number
    return Math.pow(this.numerox,3)
    }
}

//exercicio6import

import {Cubo} from "./exercicio6export"

let Topinho = new Cubo(8)
console.log(Topinho.aocubo())