import React from 'react'
import { SectionJobs } from './SectionJobs/SectionJobs'
import { SectionServices } from './SectionServices/SectionServices'

const Main = () => {
    return (
        <main>
            <SectionServices />
            <SectionJobs />
        </main>
    )
}

export { Main }