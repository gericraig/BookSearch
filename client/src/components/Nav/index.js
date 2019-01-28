import React from "react";


function Nav() {
  return (
    
   <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="btn btn-warning">Google Book Search</button>
      </div>
      <ul className="nav navbar-nav">
        <li className="active"></li>
        <a href="/Users/omarcharlesgedeon/Desktop/12-Stu_GoogleBooksSearch/client/src/pages/Books.js" className="btn btn-warning" role="button">Search</a>
        <a href="/Users/omarcharlesgedeon/Desktop/12-Stu_GoogleBooksSearch/client/src/pages/savedBooks.js" className="btn btn-warning" role="button">Saved</a>
      </ul>
    </div>
  </nav>
  );
}

export default Nav;

{/* <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link type="button" className="btn btn-warning" to="/">Google Book Search</Link>
      </div>
      <ul className="nav navbar-nav">
        <li className="active"></li>
        <Link  className="btn btn-warning" role="button" to="/">Search</Link>
        <Link to="/"  className={window.location.pathname === "/" || window.location.pathname === "/search" ? "btn btn-warning" :"button"}>Saved</Link>
      </ul>

    </div>
  </nav> */}
