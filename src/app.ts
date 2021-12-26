import {
    createCustomer,
    createCustomerID,
    getBooksByCategory,
    getBooksByCategoryPromise,
    logCategorySearch,
    logSearchResults,
} from './functions';
import { Author, Book, Librarian, Logger, Magazine, LibMgrCallback } from './interfaces';
import { Category } from './enums';
import {
    BookRequiredFields,
    PersonBook,
    Unpromisify,
    UpdatedBook,
    СreateCustomerFunctionType,
} from './types';
import { UL } from './classes';


showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// --------------- task 2.01
/* const valB: Book1 = {
    property(s: string): number {
        return +s;
    },
    method(s: string): number {
        return +s;
    }
}; */


// function getAllBooks(): Book[] {
// const books: Array<Book> = [

// function getAllLibraries(): Library[] {
// const libraries: Array<Library> = [

// function logFirstAvailable(books: Book[]): void{

// logFirstAvailable(getAllBooks());

// logBookTitles(getBookTitlesByCategory(Category.JavaScript));

// console.log(getBookAuthorByIndex(2));

// console.log(calcTotalPages(getAllLibraries()));


// --------------- task 3.01
const myID: string = createCustomerID('Ann', 10);
// console.log(myID);

type TFn = (name: string, id: number) => string;

let idGenerator: TFn;
// let idGenerator: typeof createCustomerID;
idGenerator = (name: string, id: number) => `${id} - ${name}`;
idGenerator = createCustomerID;
// console.log(idGenerator('this', 10));


// --------------- task 3.02
// createCustomer('Sam');
// createCustomer('Olga', 30);
// createCustomer('Max', 25, 'Kyiv');

// const result = getBookTitlesByCategory();
// console.log(result);

// logFirstAvailable();

// console.log(getBookByID(1));

// const myBooks = сheckoutBooks('Ann', 1, 2, 4);
// console.log(myBooks);


// --------------- task 3.03
// console.log(getTitles(false));


// --------------- task 3.04
// console.log(bookTitleTransform('TypeScript'));
// console.log(bookTitleTransform(123));


// --------------- task 4.01
// printBook(myBook);
// myBook.markDamaged('missing back cover');


// --------------- task 4.02
// const logDamage: DamageLogger = (reason: string): void => console.log(`Damaged: ${reason}`);
const logDamage: Logger = (reason: string): void => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');


// --------------- task 4.03

const favoriteAuthor: Author = {
    name: 'Max',
    email: 'max@ukr.net',
    numBooksPublished: 2
};

const favoriteLibrarian: Librarian = {
    name: 'Max',
    email: 'max@ukr.net',
    department: 'Classical Literature',
    assistCustomer(name: string){
        console.log(name);
    }
};


// --------------- task 4.04

const offer: any = {
    book: {
        title: 'Essential TypeScript',
    },
};

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);


// --------------- task 4.05
// console.log(getProperty(getAllBooks()[0], 'title'));
// console.log(getProperty(getAllBooks()[0], 'markDamaged'));
// console.log(getProperty(getAllBooks()[0], 'isbn'));


// --------------- task 5.01
// const ref: ReferenceItem = new ReferenceItem(1,'TypeScript', 2021);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'Group';
// console.log(ref.publisher);
// console.log(ref.getID());


// --------------- task 5.02, 6.03
// const refBook: Encyclopedia = new Encyclopedia(1,'TypeScript', 2021, 3);
// const refBook = new RefBook (1,'TypeScript', 2021, 3);
// console.log(refBook);
// refBook.printItem();
// printRefBook(refBook);

// const univ = new UL.UniversityLibrarian();
// printRefBook(univ);
// let p = Object.getPrototypeOf(refBook);
// p = Object.getPrototypeOf(p);
// console.log(p);
// p['printItem']();


// --------------- task 5.03
// const refBook: Encyclopedia = new Encyclopedia(1,'TypeScript', 2021, 3);
// console.log(refBook);
// refBook.printCitation();


// --------------- task 5.04
// const favoriteLibrarians: Librarian =  new UL.UniversityLibrarian();
// favoriteLibrarians.name = "Anna";
// favoriteLibrarians.assistCustomer("Max");
// console.log(favoriteLibrarians);


// --------------- task 5.05

const personBook: PersonBook = {
    name: 'Max',
    author: 'Lili',
    email: 'max@example.com',
    available: false,
    category: Category.TypeScript,
    id: 1,
    title: 'Learn TypeScript'
};

// console.log(personBook);


// --------------- task 6.05
// const flag = true;

// import * as module from './classes';

// if (flag) {
// const module = await import('./classes');
// const reader = new module.Reader();

// reader.name = 'Max';
// console.log(reader);

// import('./classes')
// .then(module => {
// const reader = new module.Reader();
// reader.name = 'Max';
// console.log(reader);
// })
// .catch(err => console.log(err));
// }


// --------------- task 6.06
// let lib: Library = new Library();
// let lib: Library = {
//    id: 1,
//    name: 'Anna',
//    address: ''
// };


// --------------- task 7.01
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];
// const result = purge(inventory);
// const result: Book[] = purge(inventory);
// const result = purge<number>([1, 2, 3, 4]);
// console.log(result);


// --------------- task 7.02
// const bookShelf: Shelf<Book> = new Shelf();
// inventory.forEach(book => bookShelf.add(book));
// const title: string = bookShelf.getFirst().title;
// console.log(bookShelf);
// console.log(title);

const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];
// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// const titleMag: string = magazineShelf.getFirst().title;
// console.log(magazineShelf);
// console.log(titleMag);


// --------------- task 7.03
// magazineShelf.printTitles();
// const magazineShelf1 = new Shelf();
// magazineShelf1.add({title: '111', a: 1});
// magazineShelf1.add({title: '111'});
// console.log(magazineShelf.find('Five Points'));

// const result = getProperty(magazines[0], 'title');
// const result = getProperty<number, 'toString'>(10, '');
// console.log(result);


// --------------- task 7.04
const bookRequiredFields: BookRequiredFields = {
    id: 1,
    author: 'Max',
    available: false,
    category: Category.CSS,
    pages: 100,
    title: 'Unknown',
    markDamaged: null
};

// const updatedBook: UpdatedBook = {};
// const params: Parameters<СreateCustomerFunctionType>;
// const params: Parameters<typeof createCustomer> = ['Max', 20, 'Kyiv'];
// createCustomer(...params);


// --------------- task 8.01, 8.02
// const obj = new UL.UniversityLibrarian();
// UL.UniversityLibrarian['a'] = 1;
// console.log(obj);
// obj.name = 'Max';
// obj.assistCustomer('Anna');
// obj['printLibrarian']();
// (obj as any).printLibrarian();
// UL.UniversityLibrarian['assistCustomer']('Boris');



// --------------- task 8.03
// const obj = new UL.UniversityLibrarian();
// obj.assistFaculty = null;
// console.log(obj);
// obj.teachCommunity = null;
// const p = Object.getPrototypeOf(obj);
// p['assistFaculty'] = null;


// --------------- task 8.04
// const enc = new RefBook(1,'TypeScript', 2021, 3);
// enc.printItem();


// --------------- task 8.05, 8.06
// const obj = new UL.UniversityLibrarian();
// console.log(obj);
// obj.name = 'Max';
// console.log(obj.name);
// obj.assistCustomer('Anna');


// --------------- task 8.07
// const enc = new RefBook(1,'TypeScript', 2021, 3);
// enc. copies = 10;


// --------------- task 9.01
// console.log('Begin');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');


// --------------- task 9.02
/* const fn1 = (titles: string[]) => {
    console.log(titles);
    return Promise.resolve(titles.length);
}; */
// console.log('Begin');
// getBooksByCategoryPromise(Category.JavaScript)
// .then(titles => {
// console.log(titles);
// return Promise.resolve(titles.length);
// })
/* .then(fn1) */
// .then(len => console.log(len))
/* .then(len: Unpromisify<ReturnType<typeof  fn1>> => console.log(len)) */
// .catch(reason => console.log(reason));
// getBooksByCategoryPromise(Category.Software)
// .then(titles => console.log(titles))
// .catch(reason => console.log(reason));
// console.log('End');


// --------------- task 9.03
// console.log('Begin');
// logSearchResults(Category.JavaScript)
//    .catch(err => console.log(err));
// console.log('End');