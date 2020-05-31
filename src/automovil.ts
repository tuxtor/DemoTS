class Automovil{
    marca:string;
    color:string;
    constructor(color:string, marca:string){
        this.marca = marca
        this.color = color
    }

    correr(){
        console.log(`Soy un auto ${this.marca} y estoy corriendo`)
    }
};

let auto1 = new Automovil("Rojo", "Honda")
let auto2 = new Automovil("Azul", "Suzuki")

auto1.correr();