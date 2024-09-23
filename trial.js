const myLibrary = [
    {
    title: "Great Gatsby", 
    pages: 235, 
    author: "Fitzgerald", 
    isRead: false
}, {
    title: 'Lolita', 
    pages: 240, 
    author: "Nabokov", 
    isRead: false 
}, {
    title: "Amazing Adventures of Kavalier and Clay", 
    pages: 315, 
    author: "Chabon", 
    isRead: false 
}]; 

function Book(title, pages, author){
    this.title = title; 
    this.pages = pages; 
    this.author = author; 
    this.isRead = false; 
}

function addBookToLibrary(stuff){
    let modal = document.querySelector('dialog'); 
    modal.show()
    // myLibrary.push(new Book([bookData from form])); 
}

function displayLibrary(){
    const container = document.querySelector("#container"); 
    myLibrary.map((book, i) => {
        let newBook = document.createElement('div'); 
        newBook.textContent = `${book.title} - 
        ${book.author}`;   
        newBook.setAttribute("id", i); 
        let deleteButton = document.createElement('button'); 
        deleteButton.innerText = "x"; 
        let isReadButton = document.createElement('button'); 
        isReadButton.innerText = "read?"; 
        isReadButton.addEventListener('click', function (e) {
            toggleRead(book, i); 
        }); 
        deleteButton.addEventListener('click', function(){
            removeBook(container, book, i); 
        })

        newBook.append(deleteButton, isReadButton); 
        container.append(newBook); 
    })
}

function toggleRead(book, i){
    book.isRead = !book.isRead; 
    let bookUI = document.getElementById(i); 
    // bookUI.classList.add('check'); 
}

function removeBook(i){
    myLibrary.splice(i, 1); 
    let element = document.getElementById(i); 
    element.remove(); 
}

const btn = document.querySelector("#newBook");
btn.addEventListener("click", function(e){
    addBookToLibrary(e.target.value); 
    e.preventDefault(); 
}); 

displayLibrary(); 

//1. where to trigger the func in the dialog... why isn't the form data coming in? 
//2. change isRead UI to checkmark after it runs or toggle button 