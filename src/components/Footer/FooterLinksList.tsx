import React from "react";
import { LiLink } from '../LiLink'

interface FooterLinksListProps{
    title: string;
    li1: string;
    li2: string;
    li3: string;
    li4: string;
}

const FooterLinksList = (props: FooterLinksListProps) => {
    const { title, li1, li2, li3, li4 } = props

    return (
        <div className="footer-links-container-list">
            <p className="footer-title">{title}</p>
            <ul>
                <LiLink content={li1} />
                <LiLink content={li2} />
                <LiLink content={li3} />
                <LiLink content={li4} />
            </ul>
        </div>
    )
}

export { FooterLinksList }