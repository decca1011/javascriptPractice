const coding = ['js',"rb","py","java","cpp"];

// const values = coding.forEach((item) => {
 
//    return item
// })

// console.log(values); // undefined  for each doesn not return
const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter ((num) => {
return num> 4
});
// console.log(newNums)
const books = [
   { 
       title: 'To Kill a Mockingbird', 
       genre: 'Fiction', 
       publishYear: 1960, 
       author: 'Harper Lee', 
       isbn: '978-0-06-112008-4' 
   },
   { 
       title: '1984', 
       genre: 'Dystopian', 
       publishYear: 1949, 
       author: 'George Orwell', 
       isbn: '978-0-452-28423-4' 
   },
   { 
       title: 'Moby Dick', 
       genre: 'Adventure', 
       publishYear: 1851, 
       author: 'Herman Melville', 
       isbn: '978-0-14-243724-7' 
   },
   { 
       title: 'The Great Gatsby', 
       genre: 'Tragedy', 
       publishYear: 1925, 
       author: 'F. Scott Fitzgerald', 
       isbn: '978-0-7432-7356-5' 
   },
   { 
       title: 'Pride and Prejudice', 
       genre: 'Romance', 
       publishYear: 1813, 
       author: 'Jane Austen', 
       isbn: '978-0-19-953556-9' 
   },
   { 
       title: 'The Catcher in the Rye', 
       genre: 'Fiction', 
       publishYear: 1951, 
       author: 'J.D. Salinger', 
       isbn: '978-0-316-76948-0' 
   },
   { 
       title: 'The Lord of the Rings', 
       genre: 'Fantasy', 
       publishYear: 1954, 
       author: 'J.R.R. Tolkien', 
       isbn: '978-0-618-00222-8' 
   },
   { 
       title: 'The Hobbit', 
       genre: 'Fantasy', 
       publishYear: 1937, 
       author: 'J.R.R. Tolkien', 
       isbn: '978-0-618-00221-1' 
   },
   { 
       title: 'War and Peace', 
       genre: 'Historical Fiction', 
       publishYear: 1869, 
       author: 'Leo Tolstoy', 
       isbn: '978-0-19-923276-5' 
   },
   { 
       title: 'Crime and Punishment', 
       genre: 'Psychological Fiction', 
       publishYear: 1866, 
       author: 'Fyodor Dostoevsky', 
       isbn: '978-0-14-044913-6' 
   }
];


// const myUserBooks = books.filter ((book) => book.genre === 'Fiction')
const myUserBooks = books.filter ((book) => { 
   return book.publishYear <= 1990 && book.genre ==='Fantasy'
})

console.log(myUserBooks);

