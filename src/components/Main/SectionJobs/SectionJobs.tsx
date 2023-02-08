import React from 'react'
import { JobCard } from './JobCard'
import './sectionJobs.scss'

const SectionJobs = () => {
    return (
        <section className="jobs-container">
            <h2>Alguns de nossos trabalhos</h2>
            <div className="jobs-list">
                <JobCard
                    jobClass={'first-job'}
                    jobNumber={'1'}
                    jobTitle={'Projeto 1'}
                />
                <div className="other-jobs-container">
                    <JobCard
                        jobClass={'job-card'}
                        jobNumber={'job2'}
                        jobTitle={'Projeto 2'}
                    />
                    <JobCard
                        jobClass={'job-card'}
                        jobNumber={'job3'}
                        jobTitle={'Projeto 3'}
                    />
                    <JobCard
                        jobClass={'job-card'}
                        jobNumber={'job4'}
                        jobTitle={'Projeto 4'}
                    />
                    <JobCard
                        jobClass={'job-card'}
                        jobNumber={'job5'}
                        jobTitle={'Projeto 5'}
                    />
                </div>
            </div>
        </section>
    )
}

export { SectionJobs }
