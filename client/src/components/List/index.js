import React,  { Component } from "react";
import "./style.css";


// This file exports both the List and ListItem components

// export function List({ children }) {
//   return (
//     <div className="list-overflow-container">
//       <ul className="list-group">{children}</ul>
//     </div>
//   );
// }

// export function ListItem({ children }) {
//   return <li className="list-group-item">{children}</li>;
// }

// function ListItem(props){
// 	return (<li key ></li>)
// }
class CardItem extends Component {

	render(){
		return(
		 
          <div className="card">
		  <div className="card-header" key={this.props.id}>
		    {this.props.title}
		  </div>
		  <div className="card-body">
		    <h5 className="card-title">Special title treatment</h5>
		    <p className="card-text"><span className="description"> Short description: </span>{this.props.description}</p>
		    <a href="#" className="btn btn-primary">Save</a>
		  </div>
		 </div>

			)

	}
}

export default CardItem;
