/* eslint-disable */
import * as assert from 'assert';

import { Book, Callback, LibMgrCallback } from './interfaces';
import { Category } from './enums';
import { BookOrUndefined, BookProperties, Library } from './types';
import refBook from './classes/encyclopedia';

export function getAllBooks(): readonly Book[] {
    const books: ReadonlyArray<Book> = <const>[
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript},
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript},
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS},
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript}
    ];
    return books;
}


export function getAllLibraries(): readonly Library[] {
    const libraries: ReadonlyArray<Library> = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];
    return libraries;
}


export function logFirstAvailable(books: readonly Book[] = getAllBooks()): void{
    console.log(`Number of books ${books.length}`);

    const title = books.find(book => book['available'] === true)?.title;
    // const title = books.find((book: Book) => book.available === true).title;
    // const title = (books.find((book: {available: boolean}) => book.available === true) as Book | undefined)?.title;
    // const title = books.find((book: {available: boolean}) => book.available === true)?.title;
    console.log(`First available book title ${title}`);
}


export function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
    return getAllBooks()
        .filter(book => book.category === category)
        .map(book => book.title);
}

export function logBookTitles(titles: string[]): void {
    return titles.forEach(title => console.log(`Book title: ${title}`));
}


export function getBookAuthorByIndex(id: number): [title: string, author: string]{
    const { title, author } = getAllBooks()[id];
    return [title, author];
}


export function calcTotalPages(libraries: Library[]): bigint {
    return BigInt(libraries
        .map(library => library.books * library.avgPagesPerBook)
        .reduce((prev, cur) => prev + cur, 0));
}


export function createCustomerID(name: string, id: number) {
    return `${id} - ${name}`;
}


export function createCustomer(name: string, age?: number, city?: string): void{
    console.log(`Customer name: ${name}`);
    if (age) {
        console.log(`Customer age: ${age}`);
    }
    if (city) {
        console.log(`Customer city: ${city}`);
    }
}


export function getBookByID(id: number): BookOrUndefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}


export function сheckoutBooks(customer: string, ...bookIDs: number[]): string[]{
    console.log(`Customer name: ${customer}`);
    return bookIDs
        .map(id => getBookByID(id))
        .filter(book => book.available === true)
        .map(book => book.title);
}


export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: any[]): string[]{
    const books = getAllBooks();
    if (args.length === 1) {
        const [arg] = args;
        if (typeof arg === 'string'){
            return books.filter(book => book.author === arg).map(book => book.title);
        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;
        if(typeof id === 'number' && typeof available === 'boolean'){
            return books.filter(book => book.id === id && book.available === available).map(book => book.title);
        }
    }
    return [];
}


export function assertStringValue(value: any): asserts value is string {
    if(typeof value !== 'string'){
        throw new Error('value should have been a string');
    }
}


export function assertRefBookInstance(condition: any): asserts condition {
    if(!condition){
        throw new Error('It is not instance of RefBook');
    }
}


export function bookTitleTransform(title: any): string | never {
    assertStringValue(title);
    return [...title].reverse().join('');
}


export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    // year: 2015,
    // copies: 3
    pages: 200,
    markDamaged: (reason: string): void => {
        console.log(`Damaged: ${reason}`);
    }
};


/*export function getProperty(book: Book, prop: BookProperties): any {
    if (typeof book[prop] === 'function'){
        return (book[prop] as Function).name;
    }
    return book[prop];
}*/


export function getProperty<TObject, TKey extends keyof TObject>(obj: TObject, prop: TKey): TObject[TKey] | string {
    if (typeof obj[prop] === 'function'){
        return obj[prop]['name'];
    }
    return obj[prop];
}


export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof refBook);
    data.printItem();
}


export function purge<T>(inventory: T[]): T[]{
    return inventory.slice(2);
}


// export function getBooksByCategory(category: Category,  callback: LibMgrCallback): void {
export function getBooksByCategory(category: Category,  callback: Callback<string[]>): void {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);

            if (titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books found');
            }
        } catch (err) {
            callback(err, null);
        }
    }, 2000);
}


export function logCategorySearch(err: Error | null, titles: string[] | null): void {
    if (err) {
        console.log(err.message);
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return  new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
                const titles = getBookTitlesByCategory(category);

                if (titles.length > 0) {
                    resolve(titles);
                } else {
                    reject('No books found');
                }
        }, 2000);
    });
}

export async function logSearchResults(category: Category) {
    const result = await getBooksByCategoryPromise(category);
    console.log(result.length);
}