import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className='body bg-dark text-light'>
        <header>
            <nav classname='navbar'>
                <div classname='container-fluid'>
                    <a classname='navbar-brand' href='index.html'>
                        Sit Pretty<sup>&reg;</sup>
                    </a>
                    <menu>
                        <ul classname='nav col-12 col-md-auto mb-2 justify-content-center mb-md-0'>
                            <li><a href='index.html' classname='nav-link active px-2 link-secondary' aria-current='page'>Home</a></li>
                            <li><a href='mastery.html' classname='nav-link px-2 link-dark'>Mastery</a></li>
                            <li><a href='tricks.html' classname='nav-link px-2 link-dark'>Tricks</a></li>
                        </ul>
                    </menu>
                </div>
            </nav>
        </header>
        
        <main classname='container-fluid text-center'>
            App components go here
        </main>
        
        <footer>
            <div classname='container-fluid'>
                <span classname='text-reset'>Website Creator: Emma Hocker</span>
                <a classname='text-reset' href='https://github.com/ejhocker/startup.git'>Github</a>
                <span classname='text-reset'>Illustrator: Elizabeth Hocker</span>
            </div>
        </footer>
    </div>
  );
}