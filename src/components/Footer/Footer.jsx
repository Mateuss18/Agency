import React from 'react'
import { FooterLinksList } from './FooterLinksList'
import './footer.scss'

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-desc-container">
                    <h3 className="footer-title">Agency</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tenetur dicta dolorum necessitatibus eum atque iste
                        quasi suscipit, ad perspiciatis sequi obcaecati,
                        deserunt adipisci voluptatem dolore blanditiis, odio
                        tempora maxime explicabo!
                    </p>
                </div>
                <div className="footer-links-container">
                    <FooterLinksList
                        title="Sobre"
                        li1="Quem somos"
                        li2="Trabalhe conosco"
                        li3="Contato"
                        li4="Blog"
                    />
                    <FooterLinksList
                        title="Soluções"
                        li1="Sites leves e rápidos"
                        li2="Hospedagem AWS/Azure"
                        li3="E-commerces"
                        li4="SEO"
                    />
                    <FooterLinksList
                        title="Sede Brasil"
                        li1="Brasil - São Paulo"
                        li2="Brasil - Rio de Janeiro"
                        li3="Brasil - Campinas"
                        li4="Canada - Vancouver"
                    />
                </div>
                <div className="footer-copy-right-container">
                    <p>&copy; 2023 Agency</p>
                    <p>A melhor agência web para seus projetos</p>
                </div>
            </div>
        </footer>
    )
}

export { Footer }
