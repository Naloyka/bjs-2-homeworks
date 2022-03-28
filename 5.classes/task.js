class PrintEditionItem {

    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(number) {
        if (number < 0) {
            this._state = 0;
        }
        else if (number < 100) {
            this._state = number;
        }
        else {
            this._state = 100;
        }
    }

    get state() {
        return this._state
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }

}


// Задача 2

class Library {

    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {

        if (book.state > 30) {
            return this.books.push(book)
        }
        return book
    }


    findBookBy(type, value) {
        let searchResult = this.books.find(book => book[type] === value);

        return (typeof searchResult === 'object') ? searchResult : null
    }

    giveBookByName(bookName) {
        let search = this.books.find(item => item.name === bookName)

        if (search) {
            this.books.splice(this.books.indexOf(bookName), 1);

            return search
        }

        else {
            return null
        }
    }
}

