import { Link } from 'gatsby';
import React from 'react';

const logo = require('../img/brandicon.svg');

const Navbar = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            navBarActiveClass: '',
        }
    }


    render() {
        return (
            <div className="navbar-container">
                <div className="navbar">
                    <Link to="/">
                        <img alt="" style={{
                            width: '120px',
                            height: 'auto',                            
                            float: 'left'
                        }} src={logo} />
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar
