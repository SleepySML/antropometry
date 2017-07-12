import React from 'react';
import {NavLink} from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (

                <nav className="row">
                        <div className="column large-5 navigation">
                            <ul className="menu nav-links">
                                <li className="nav-link"><NavLink to="/" exact activeClassName="active" className="menu-link" ><image id="logo-image"></image></NavLink></li>
                                <li className="nav-link"><NavLink to="/" className="menu-link" exact activeClassName="active">Home</NavLink></li>
                                <li className="nav-link"><NavLink to="/notes" className="menu-link" activeClassName="active">Notes</NavLink></li>
                                <li className="nav-link"><NavLink to="/statistic" className="menu-link" activeClassName="active">Statistic</NavLink></li>
                            </ul>
                        </div>
                        <div className="column">
                            <ul className="menu align-right">
                                <li className="nav-link"><button id="login-btn" className="button">Log in</button></li>
                                <li className="nav-link"><button id="signUp-btn" className="button">Sign up</button></li>
                            </ul>
                        </div>
                </nav>
        );
    }
}

export default Navigation;
