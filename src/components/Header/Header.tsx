import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faBars } from '@fortawesome/free-solid-svg-icons'
import { LiLink } from '../LiLink'
import './header.scss'

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
                        <LiLink content={'Home'} />
                        <LiLink content={'Serviços'} />
                        <LiLink content={'Contato'} />
                        <LiLink linkClassName='btn btn-primary' content={'Entrar'} />
                        <LiLink linkClassName='btn' content={'Registrar'} />
                    </ul>
                </nav>
                <button className='menu-button'>
                    <FontAwesomeIcon icon={faBars} />
                </button>
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
