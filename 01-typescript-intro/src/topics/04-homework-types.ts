/*
    ===== Código de TypeScript =====
*/
interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
};

//Cuando tenemos objetos dentro de otros, lo ideal es
//hacer otra interfaz de ese objeto para implementarlo luego
//como acabamos de hacer, que añadimos dentro de SuperHero a Address
interface Address {
    street: string;
    country : string;
    city: string;

}

const superHeroe: SuperHero  = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};