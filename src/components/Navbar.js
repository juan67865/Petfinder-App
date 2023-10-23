import React from "react";

function Navbar() {
    return (
        <nav className="narbar">
            <div className="container">
                <h1 className="logo">Pet Adoption</h1>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/search">Search</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;