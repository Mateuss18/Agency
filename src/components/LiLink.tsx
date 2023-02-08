import React from 'react'

interface LiLinkPros {
    linkClassName?: string;
    content: string;
}

const LiLink = (props: LiLinkPros) => {
    const { linkClassName, content } = props

    return (
        <li>
            <a href="#" className={linkClassName}>{content}</a>
        </li>
    )
}

export { LiLink }