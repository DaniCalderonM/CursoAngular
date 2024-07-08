
export class Person {
    // public name:string;
    // public address:string;

    // Forma corta de crear clases en TS
    constructor( 
        public firstName: string,
        public lastName: string,
        public address: string = 'No Address'
    ) {}

}

//Herencia
// export class Hero extends Person{
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ) {
//         super(realName, 'New York');
//     }
// }

//Composicion
export class Hero{

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {
        
    }
}

const tony = new Person('Tony','Stark', 'New York');

const ironman = new Hero('Ironman', 45, 'Tony Stark', tony);

console.log(ironman);