import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import '../css/Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img id="logoUdemy" src={'./images/udemyLogo.png'} alt="Logo Udemy" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Catégories
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/">Développement <span className="iconFleche"><FontAwesome className="chevronIcon" name="chevron-right" /></span></a>
                                <a className="dropdown-item" href="/">Business <span className="iconFleche"><FontAwesome className="chevronIcon" name="chevron-right" /></span></a>
                                <a className="dropdown-item" href="/">Fiance et comptabilité <span className="iconFleche"><FontAwesome className="chevronIcon" name="chevron-right" /></span></a>
                                <a className="dropdown-item" href="/">Informatique et logiciels <span className="iconFleche"><FontAwesome className="chevronIcon" name="chevron-right" /></span></a>
                                <a className="dropdown-item" href="/">Productivité bureautique <span className="iconFleche"><FontAwesome className="chevronIcon" name="chevron-right" /></span></a>
                                <a className="dropdown-item" href="/">Développement personnel <span className="iconFleche"><FontAwesome className="chevronIcon" name="chevron-right" /></span></a>
                                <a className="dropdown-item" href="/">Design <span className="iconFleche"><FontAwesome className="chevronIcon" name="chevron-right" /></span></a>
                                <a className="dropdown-item" href="/">Marketing <span className="iconFleche"><FontAwesome className="chevronIcon" name="chevron-right" /></span></a>
                                <a className="dropdown-item" href="/">Mode de vie <span className="iconFleche"><FontAwesome className="chevronIcon" name="chevron-right" /></span></a>
                                <a className="dropdown-item" href="/">Photographie et vidéo <span className="iconFleche"><FontAwesome className="chevronIcon" name="chevron-right" /></span></a>
                                <a className="dropdown-item" href="/">Santé et bien-être <span className="iconFleche"><FontAwesome className="chevronIcon" name="chevron-right" /></span></a>
                                <a className="dropdown-item" href="/">Musique <span className="iconFleche"><FontAwesome className="chevronIcon" name="chevron-right" /></span></a>
                                <a className="dropdown-item" href="/">Formations et diplômes <span className="iconFleche"><FontAwesome className="chevronIcon" name="chevron-right" /></span></a>
                            </div>
                        </li>
                        <div className="search active">
                            <input type="text" className="input" placeholder="      Rechercher" />
                        </div>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Udemy for Business
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item text-center" href="/">BlaBla</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Enseigner sur Udemy
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item text-center" href="/">Blabla</a>
                            </div>
                        </li>
                        <li className="mt-1">
                            <FontAwesome className="cartArrowIcon" name="cart-arrow-down" size="2x" />
                        </li>
                        <li className="mt-1 ml-3">
                            <button className="btn">Se connecter</button>
                        </li>
                        <li className="mt-1 ml-3">
                            <button className="btn btn-primary">S'inscrire</button>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export { Navbar };