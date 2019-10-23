// Fetching Data from the API


fetchingData();

function fetchingData(url) {
    let bookstore = [ ];

fetch("https://api.jsonbin.io/b/5d6fd038fc5937640ce286a1")
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        console.log(data.books);
        let bookstore = data.books;
    
        changeHTMLText(bookstore);
       createSearchEngine(bookstore)
    })
    .catch(function (error) {
        console.log(error);
    });
}


// Looping through the retrieved data and adding classes to HTML with DOM


function changeHTMLText(bookstore) {
    for (var i = 0; i < bookstore.length; i++) {
        var flippingContainer = document.createElement("div");
        flippingContainer.classList.add("flipping-container");
        flippingContainer.setAttribute("ontouchstart", "this.classList.toggle('hover');");
        flippingContainer.setAttribute("data-title", bookstore[i].title);
        
        var flipper = document.createElement("div");
        flipper.classList.add("flipper");
        
        var frontView = document.createElement("div");
        frontView.classList.add("front-view");
        
        var backView = document.createElement("ul");
        backView.classList.add("back-view");
        
        
       
        
        // Adding images to the document
        
       
        
        var picture = new Image;
        picture.classList.add("pictures");
        picture.src = bookstore[i].cover;
        
        var bookTitle = document.createElement("p");
        bookTitle.innerHTML = bookstore[i].title;
        
        
        
        // Adding description and buttons to the books
        
       
        
        
        var bookDescription = document.createElement("p");
        bookDescription.innerHTML = bookstore[i].description;
        var button = document.createElement("button");
        var information = document.createTextNode("Learn More");
        
        button.setAttribute("href", bookstore[i].detail);
        button.setAttribute("data-fancybox", "gallery");
        
        button.appendChild(information);
        
        frontView.appendChild(picture);
        
       
        backView.appendChild(bookTitle);
        backView.appendChild(bookDescription);
        backView.appendChild(button);
        
        
        flipper.appendChild(frontView);
        flipper.appendChild(backView);
        
        flippingContainer.appendChild(flipper);
        document.getElementById("all-books").appendChild(flippingContainer);
        
    }
}


function createSearchEngine (bookstore) {
    var searchEngine = document.forms["filterbox"].querySelector("#type-in");
searchEngine.addEventListener("keyup", function(e){
    
    var word = e.target.value.toLowerCase();
   
        
        var bookFromHTML = Array.from(document.querySelectorAll(".flipping-container"));
    console.log(bookFromHTML);
    
    for (var i = 0; i < bookFromHTML.length; i++) {
        
        var bookTitle = bookFromHTML[i].dataset.title
        if (bookTitle.toLowerCase().indexOf(word) != -1) {
            bookFromHTML[i].style.display="block";
        } else {
            bookFromHTML[i].style.display="none";
        }
         
         }

})

}


