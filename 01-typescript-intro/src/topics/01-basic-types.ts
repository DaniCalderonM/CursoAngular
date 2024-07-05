
const name: string = 'Canela';

// Formas de escribir que puede recibir tanto numero como strings
// let hpPoints: number | string = 95;
let hpPoints: number | 'FULL' = 95;
const isAlive: boolean = true;

hpPoints = 'FULL';
console.log({
        name, hpPoints, isAlive
});

export {};