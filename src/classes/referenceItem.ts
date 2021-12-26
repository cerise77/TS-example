/* eslint-disable */

import { timeout } from '../decorators';

abstract class ReferenceItem {
    /* title: string;
    year: number;

    constructor(newTitle: string, newYear: number) {
        this.title = newTitle;
        this.year = newYear;
        console.log('Creating a new ReferenceItem...');
    } */
    private _publisher: string;

    #id: number;

    static department: string = 'Movies';

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher : string) {
        this._publisher = newPublisher;
    }

    constructor (id: number, public title: string, protected year: number){
        console.log('Creating a new ReferenceItem...');
        this.#id = id;
    }

    // @timeout(5000)
    printItem(): void{
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    }

    getID(): number {
        return this.#id;
    }

    abstract printCitation(): void;
}



class Pilot {

    constructor(public salary: number, public hours: number) {}

    fly(): void{
        console.log(`Pilot must have at least ${this.hours} hours of experience in aircraft`);
    }

    getSalary(): void{
        console.log(`He gets ${this.salary}$ in salary`);
    }
}

class Builder {

    constructor(public salary: number, public name: string) {}

    build(): void {
        console.log(`Name of his job: ${this.name}`);
    }

    getSalary(): void {
        console.log(`He gets ${this.salary}$ in salary`);
    }
}


// function employeesProfession(): Pilot | Builder {
//    return new Pilot(7000, 1500);
// }

// const employee = employeesProfession();
// employee.getSalary();
// salary.fly();
// (<Pilot>salary).fly();

function isPilot(employee: Pilot | Builder): employee is Pilot {
    return (<Pilot>employee).fly !== undefined;
}

function work(employee: Pilot | Builder): void {
    employee.getSalary();

    if (isPilot(employee)) {
        employee.fly();
    } else {
        employee.build();
    }
}

// work(new Pilot(7000, 1500));
// work(new Builder(2000, 'Intergal'));


export { ReferenceItem };