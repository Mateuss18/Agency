import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface cardProps{
    iconName: IconProp;
    cardTitle: string;
}

const ServicesCard = (props: cardProps) => {
    const { iconName, cardTitle } = props

    return (
        <div className="services-card">
            <FontAwesomeIcon icon={iconName} />
            <h3>{cardTitle}</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Harum corrupti illum illo. Tenetur natus temporibus ea
                quisquam.
            </p>
        </div>
    )
}

export { ServicesCard }