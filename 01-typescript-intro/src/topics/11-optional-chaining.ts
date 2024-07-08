

export interface Passenger{
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'César'
}

const passenger2: Passenger = {
    name: 'Danicsa',
    children: ['Canela', 'Fuki']
}


const printChildren = (passenger: Passenger) => {
    //Esto es el encadenamiento opcional - no necesitamos hacer el if
    // porque con || le damos el siguiente valor
    const howManyChildren = passenger.children?.length || 0;

    console.log(passenger.name, howManyChildren);
} 

printChildren(passenger1);