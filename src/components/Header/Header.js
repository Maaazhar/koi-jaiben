import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const login = "Log in";
    let user = false;
    console.log(loggedInUser.name);
    if (loggedInUser.name !== undefined)
    {
        user =true;
    }
    console.log('log from header', loggedInUser.name);
    const history = useHistory();
    const loginHandler = () => 
    {
        history.push('/login');
    }
    return (
        <div>
            <div className="fixed-top row mt-3 ">
                <div className="col-lg-6 text-light"> </div>
                <div className=" col-lg-6 ">
                    <nav className=" navbar navbar-expand-lg navbar-light bg-transparent">
                        <div className="container-fluid">
                            <Link className="navbar-brand text-warning fs-3 fw-bold" to="/home">Koi Jaiben</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                    <li className="nav-item">
                                        <Link className="nav-link active text-light fw-bold fs-5" aria-current="page" to="/home">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active  text-light fw-bold fs-5" href="#">Destination</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link  active  text-light fw-bold fs-5" href="#" tabindex="-1" aria-disabled="true">Contact</a>
                                    </li>
                                    <li className="nav-item">
                                        <button className="btn  btn-outline-warning  fw-bold fs-5" onClick={loginHandler} type="submit">{
                                        user 
                                        ? loggedInUser.name  
                                        : login }</button>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                    </nav>
                </div>
            </div>



        </div>
    );
};

export default Header;