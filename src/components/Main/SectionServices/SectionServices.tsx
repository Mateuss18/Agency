import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faCartPlus, faChartLine, faChessPawn, faCloud } from '@fortawesome/free-solid-svg-icons'
import { faBuffer } from '@fortawesome/free-brands-svg-icons'
import './sectionServices.scss'

const SectionServices = () => {
    return (
        <section className="services-container">
            <h2>O que fazemos</h2>
            <div className="services-card-container">
                <div className="services-card">
                    <FontAwesomeIcon icon={faBuffer} />
                    <i className="fab fa-buffer"></i>
                    <h3>Desenvolvimento Full Stack</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Harum corrupti illum illo. Tenetur natus temporibus ea
                        quisquam.
                    </p>
                </div>
                <div className="services-card">
                    <FontAwesomeIcon icon={faBolt} />
                    <h3>Sites leves e rápidos</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Harum corrupti illum illo. Tenetur natus temporibus ea
                        quisquam.
                    </p>
                </div>
                <div className="services-card">
                    <FontAwesomeIcon icon={faCartPlus} />
                    <h3>E-commerces</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Harum corrupti illum illo. Tenetur natus temporibus ea
                        quisquam.
                    </p>
                </div>
                <div className="services-card">
                    <FontAwesomeIcon icon={faChartLine} />
                    <h3>SEO</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Harum corrupti illum illo. Tenetur natus temporibus ea
                        quisquam.
                    </p>
                </div>
                <div className="services-card">
                    <FontAwesomeIcon icon={faChessPawn} />
                    <h3>Estratégias de Marketing</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Harum corrupti illum illo. Tenetur natus temporibus ea
                        quisquam.
                    </p>
                </div>
                <div className="services-card">
                    <FontAwesomeIcon icon={faCloud} />
                    <h3>Hospedagem AWS/Azure</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Harum corrupti illum illo. Tenetur natus temporibus ea
                        quisquam.
                    </p>
                </div>
                <a href="#" className="btn btn-primary btn-rounded">
                    Veja todos os serviçoes
                </a>
            </div>
        </section>
    )
}

export { SectionServices }
