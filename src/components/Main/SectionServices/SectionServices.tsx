import React from 'react'
import { faBolt, faCartPlus, faChartLine, faChessPawn, faCloud } from '@fortawesome/free-solid-svg-icons'
import { faBuffer } from '@fortawesome/free-brands-svg-icons'
import { ServicesCard } from './ServicesCard'
import './sectionServices.scss'

const SectionServices = () => {
    return (
        <section className="services-container">
            <h2>O que fazemos</h2>
            <div className="services-card-container">
                <ServicesCard cardTitle="Desenvolvimento Full Stack" iconName={faBuffer} />
                <ServicesCard cardTitle="Sites leves e rápidos" iconName={faBolt} />
                <ServicesCard cardTitle="E-commerces" iconName={faCartPlus} />
                <ServicesCard cardTitle="SEO" iconName={faChartLine} />
                <ServicesCard cardTitle="Estratégias de Marketing" iconName={faChessPawn} />
                <ServicesCard cardTitle="Hospedagem AWS/Azure" iconName={faCloud} />
                <a href="#" className="btn btn-primary btn-rounded">
                    Veja todos os serviçoes
                </a>
            </div>
        </section>
    )
}

export { SectionServices }
