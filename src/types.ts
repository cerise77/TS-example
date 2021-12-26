import { Author, Book, Person, ShelfItem } from './interfaces';
import { createCustomer, getBooksByCategory, getBooksByCategoryPromise } from './functions';

/* type Book1 = {
    id: number;
    title: string;
    author: string;
    available: boolean;
    // category: Category;
}; */

export type Library = {
    lib: string;
    books: number;
    avgPagesPerBook: number;
};


export type BookProperties = keyof Book;

export type PersonBook = Person & Book;
export type BookOrUndefined = Book | undefined;

// type DamageLogger = (reason: string) => void;


export type BookRequiredFields = Required<Book>;
export type UpdatedBook = Partial<Book>;
export type AuthorWoEmail = Omit<Author, 'email'>;
export type СreateCustomerFunctionType = typeof createCustomer;


export type fn = (a1: string, a2: number, a3: boolean ) => symbol;
type Param1<T> =  T extends (a1: infer R, a2: number, a3: boolean ) => symbol ? R : never;
type Param2<T> =  T extends (a1: string, a2: infer R, a3: boolean ) => symbol ? R : never;
type Param3<T> =  T extends (a1: string, a2: number, a3: infer R ) => symbol ? R : never;

type p1 = Param1<fn>;
type p2 = Param2<fn>;
type p3 = Param3<fn>;

export type Unpromisify<T> = T extends Promise<infer R> ? R : never;

type p = ReturnType<typeof getBooksByCategoryPromise>;
type dataType = Unpromisify<p>;

// Unpromisify<Promise<string[]>> => string[]