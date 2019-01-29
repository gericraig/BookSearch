import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import CardItem  from "../components/List";
import { Input, FormBtn } from "../components/Form";
import "../pages/books.css";

class Books extends Component {
  state = {
    search: "",
    books : []
  };

  handleInputChange = event => {
    // console.log(event.target.value)
    // console.log(this.state.search)
    const name = event.target.name;
    const value = event.target.value;
    //this.setState({search: event.target.value})
    this.setState({[name]: value});
    console.log(this.state.search)
  }

  handleFormSubmit = event => {
    event.preventDefault();
    //console.log("form submit",this.state.search)
    //this.setState({search: event.target.value})
    console.log("inside handleformsubmit")
    this.searchBooks(this.state.search);

  }

  // componentDidMount() {
  //   this.searchBooks();
  // }

  searchBooks = (query) => {
    console.log("form submit - ",query);
    API.search(query)
      .then(res => { 
         console.log("response",res.data.items);
          this.setState({ books: res.data.items })
        // console.log(this.state.books))
      })
       
       
      .catch(err => console.log(err));
      //console.log(this.state.books));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <strong><h1>Google Book Search</h1></strong>
              <h5>-React Edition-</h5>
            </Jumbotron>
            
          </Col>
          <Col size="md-3 sm-1">
          <form>
              <h1>Book Search</h1>
              <Input name="search" onChange={this.handleInputChange} placeholder="Title (required)" />
              <button onClick={this.handleFormSubmit}>Submit Book</button>
            </form>
          </Col>
        </Row>
        
        <div>
          
        {/* 3 parameter...first is element, second is index, and third is whole array that we are mapping */}
           {this.state.books.map((book, i, books) => (
             <CardItem  key={book.id} id={book.id}  books={books} index={i} title={book.volumeInfo.title} description={book.volumeInfo.description}/>
            
            //console.log("title",book.title)

           
           
            ))}
          
        </div>
     
      </Container>
    );
  }
}

export default Books;

