import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { LiLink } from '../LiLink'
import './header.scss'

import { useState } from 'react'

const Header = () => {
    const [active, setMode] = useState(false)
    const ToggleMode = () => {
        setMode(!active)
    }

    return (
        <header id="main-banner">
            <div className={active ? "nav-container active" : "nav-container"}>
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
                <button className='menu-btn' onClick={ToggleMode}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <button className='menu-close-btn' onClick={ToggleMode}>
                    <FontAwesomeIcon icon={faClose} />
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
