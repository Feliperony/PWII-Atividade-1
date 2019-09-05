export class Piscina
{
    constructor(public diametro:number, public custoconstrucao:number){}

    raio(){Number
        return (this.diametro /2)
    }
    area(){Number
        return ((this.raio() * this.raio()) * 3.14 )
    }
    custoTotal(){Number
        return (this.area() * this.custoconstrucao)
    }
}