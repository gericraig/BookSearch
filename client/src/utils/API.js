import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=search+";
const APIKEY = "&key=AIzaSyBsj9UV8OWocfEcXd0k2x2ay5fOJ1IcyYk";

export default {
  searchBooks: function(query){
      var qString = BASEURL + query  + APIKEY
      console.log(qString);
      return axios.get(qString)
  },
  // Gets all books
  getBooks: function() {
      return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
      return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
      return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
      return axios.post("/api/books", bookData);
  }
};
//https://www.googleapis.com/books/v1/volumes?q=search+&key=AIzaSyBsj9UV8OWocfEcXd0k2x2ay5fOJ1IcyYk+harrypotter
// export default {
//   // Gets all books
//   getBooks: function() {
//     return axios.get("/api/books");
//   }
//   // getBooks: function() {
//   //   return axios.get("/api/search")
//   // },
//   // // Gets the book with the given id
//   // getBooks: function(id) {
//   //   return axios.get("/api/books/" + id);
//   // },
//   // // Deletes the book with the given id
//   // deleteBook: function(id) {
//   //   return axios.delete("/api/books/" + id);
//   // },
//   // // Saves a book to the database
//   // saveBook: function(bookData) {
//   //   return axios.post("/api/books", bookData);
//   // }
// };
