import React from 'react';
import NavigationItems from '../Navigation/NavigationItems/NavItems';

const home = () => (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
           
            <NavigationItems />
            
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>

    </nav>
)

export default home;