import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import CardItem  from "../components/List";
import { Input, FormBtn } from "../components/Form";
import Jumbotron from "../components/Jumbotron";
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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.loadBooks(this.state.title);
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Google Book Search</h1>
              <h3> Using React</h3>
            </Jumbotron>
            <Jumbotron>
              <h4> Book Search</h4>
              <h5> Book:</h5>
              <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Book Title (required)"
              />
               <FormBtn
                disabled={!(this.state.title)}
                onClick={this.handleFormSubmit} 
              >
                Submit Book
              </FormBtn>
              </form>
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
          
           {this.state.books.map(book => (
             <CardItem  key={book.id} title={book.volumeInfo.title} description={book.volumeInfo.description}/>
            
            //console.log("title",book.title)

           
           
            ))}
          
        </div>
     
      </Container>
    );
  }
}

export default Books;