import React from 'react'
import './sectionJobs.scss'

const SectionJobs = () => {
    return (
      <section className="jobs-container">
        <h2>Alguns de nossos trabalhos</h2>
        <div className="jobs-list">
          <div className="first-job" id="job1">
            <div className="job-card-cover">
              <p className="job-card-title">Projeto 1</p>
              <p className="job-card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequatur veritatis fugiat totam recusandae quasi tempore molestiae aliquam.</p>
            </div>
          </div>
          <div className="other-jobs-container">
            <div className="job-card" id="job2">
              <div className="job-card-cover">
                <p className="job-card-title">Projeto 2</p>
                <p className="job-card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequatur veritatis fugiat totam recusandae quasi tempore molestiae aliquam.</p>
              </div>
            </div>
            <div className="job-card" id="job3">
              <div className="job-card-cover">
                <p className="job-card-title">Projeto 3</p>
                <p className="job-card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequatur veritatis fugiat totam recusandae quasi tempore molestiae aliquam.</p>
              </div>
            </div>
            <div className="job-card" id="job4">
              <div className="job-card-cover">
                <p className="job-card-title">Projeto 4</p>
                <p className="job-card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequatur veritatis fugiat totam recusandae quasi tempore molestiae aliquam.</p>
              </div>
            </div>
            <div className="job-card" id="job5">
              <div className="job-card-cover">
                <p className="job-card-title">Projeto 5</p>
                <p className="job-card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequatur veritatis fugiat totam recusandae quasi tempore molestiae aliquam.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export { SectionJobs }

