import React from 'react'

const NavBar = () => {
  return (
    <div>
      <div class="text-bg-info p-3"><center>FRIENDS APP</center></div>
      
          <br></br>
          <nav class="navbar navbar-expand-lg navbar-light bg-warning">
          <a class="navbar-brand" href="/NavBar"></a>
          <span class="navbar-brand mb-0 h1"></span>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="nav-link" href="/Home">Home <span class="sr-only"></span></a>
                    </li>
                    <li class="nav-item active">
                      <a class="nav-link" href="/Add">Add <span class="sr-only"></span></a>
                    </li>
                    <li class="nav-item active">
                      <a class="nav-link" href="/Search">Search <span class="sr-only"></span></a>
                    </li>
                    <li class="nav-item active">
                      <a class="nav-link" href="/Login">Login <span class="sr-only"></span></a>
                    </li>
                    <li class="nav-item active">
                      <a class="nav-link" href="/ViewAll">ViewAll <span class="sr-only"></span></a>
                    </li>
                    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/Settings" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Settings
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/Settings">Action</a>
          <a class="dropdown-item" href="/Settings">Another action</a>
          <a class="dropdown-item" href="/Settings">Something else here</a>
        </div>
      </li>
                    
                  </ul>
                  <form class="form-inline">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">@</span>
                                </div>
                                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </form>
                    
              </div>
          </nav>
        
    </div>
  )
}

export default NavBar