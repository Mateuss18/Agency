import React from 'react'
import './header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header id="main-banner">
            <div className="nav-container">
                <a href="#" className="brand">
                    <FontAwesomeIcon icon={faBrain} />
                    Agency
                </a>
                <nav>
                    <ul className="nav-container-navbar">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Serviços</a>
                        </li>
                        <li>
                            <a href="#">Contato</a>
                        </li>
                        <li>
                            <a href="#" className="btn btn-primary">
                                Entrar
                            </a>
                        </li>
                        <li>
                            <a href="#" className="btn">
                                Registrar
                            </a>
                        </li>
                    </ul>
                </nav>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="title-container">
                <h2>Nós desenvolvemos</h2>
                <h1>Poderosas Experiências</h1>
                <a href="#" className="btn btn-primary btn-rounded">
                    Fazer Orçamento
                </a>
            </div>
        </header>
    )
}

export { Header }
