import { Category } from './enums';

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    // markDamaged?(reason: string): void;
    // markDamaged?: (reason: string) => void;
    markDamaged?: DamageLogger;
};

interface DamageLogger {
    (reason: string): void;
}

interface  Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}

/* interface Book1 {
    property: (value: string) => number;
    method(value: string): number;
} */


interface Magazine {
    title: string;
    publisher: string;
}


interface ShelfItem {
    title: string;
}

interface LibMgrCallback {
    (err: Error | null, titles: string[] | null): void;
}

interface Callback<T>{
    (err: Error, titles: T): void;
}

export { ShelfItem, Magazine, Book, DamageLogger as Logger, Person, Author, Librarian, LibMgrCallback, Callback };