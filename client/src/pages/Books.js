import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import Jumbotron from "../components/Jumbotron";
import "../pages/books.css";

class Books extends Component {
  state = {
    books: [],
    title: "",
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    console.log(this.state.title)
    API.searchBooks(this.state.title).then(res =>
        this.setState({ books: res.data, title: ""})
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
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
        </Row>
      </Container>
    );
  }
}

export default Books;