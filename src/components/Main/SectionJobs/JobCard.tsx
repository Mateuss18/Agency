import React from 'react'

interface jobCardProps{
    jobClass: string;
    jobNumber: string;
    jobTitle: string;
}

const JobCard = (props: jobCardProps) => {
    const { jobClass, jobNumber, jobTitle } = props

    return (
        <div className={jobClass} id={jobNumber}>
            <div className="job-card-cover">
                <p className="job-card-title">{jobTitle}</p>
                <p className="job-card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequatur veritatis fugiat totam recusandae quasi tempore molestiae aliquam.</p>
            </div>
        </div>
    )
}

export { JobCard }