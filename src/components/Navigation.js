import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
            <div className="container px-5">
                <NavLink className="navbar-brand" to='/'><h1 className="fw-bolder text-primary title">Nahla BENZID | Développeuse Web </h1></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                        <li className="nav-item"><NavLink className="nav-link" to='/'>Accueil</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to='/competences'>Compétences</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to='/projets'>Projets</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )

};

export default Navigation;