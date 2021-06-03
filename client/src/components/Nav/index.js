import React from "react";

function Nav() {

  return (
<nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">PluggedIn</a>
      <button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/main">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Connections">Plugs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Search">Work</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"></a>
          </li>
        
        </ul>
        <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div>
    </div>
  </nav>


  );
}

export default Nav;
