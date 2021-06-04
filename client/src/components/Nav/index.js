import React from "react";

function Nav() {

  return (
<nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">PluggedIn</a>
      <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
  
      <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/main">Home</a>
          </li>
            <li className="nav-item">
            <a className="nav-link" href="/Search">Let's Work!</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Connections">My Plugs</a>
          </li>
        
       
        
        </ul>
        <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search for User" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div>
    </div>
  </nav>


  );
}

export default Nav;
