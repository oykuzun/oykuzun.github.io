import React from 'react'
import './experience.css'
import { GiSevenPointedStar } from 'react-icons/gi'
import { TiLocation, TiCalendar } from 'react-icons/ti'
import NRC from '../../assets/NRC.png'
import Definity from '../../assets/definity.png'
import Hacettepe from '../../assets/Hacettepe.png'

const data = [
  {
    company: 'National Research Council',
    title: 'Lab Automation Engineer',
    location: 'Mississauga, ON',
    dates: 'Sep 2022 - Dec 2022',
    bullets: [
      'Assisted the development of Python APIs for the automation of various instruments',
      'Implemented an algorithm to statistically analyze catalyst samples using OpenCV',
      'Optimized the design of the automated platorm used to accelerate catalyst materials discovery for Carbon Capture',
      'Performed data analysis using Numpy and Pandas on the electrochemical data collected'
    ],
    image: NRC,
  },
  {
    company: 'Definity Financial Corporation',
    title: 'Technical Analyst',
    location: 'Waterloo, ON',
    dates: 'Jan 2022 - Apr 2022',
    bullets: [
      'Resolved 260+ tickets; built over 150 machines including virtual machines; ensured proper software and credential deployment for an efficient work environment',
      'Multi-tasked and prioritized in order to meet tight internal deadlines',
      'Practiced technical agility by quickly adapting to new methods in order to take part in company-wide projects',
    ],
    image: Definity,
  },
  {
    company: 'Hacettepe University',
    title: 'Undergraduate Research Assisstant',
    location: 'Ankara, Turkey',
    dates: 'May 2021 - Aug 2021',
    bullets: [
      'Assisted multiple research projects on biofuel production by creating academic summaries of literature and performing preliminary data analysis',
      'Marked 150+ final exams and midterms for various courses'
    ],
    image: Hacettepe,
  },
]

const Experience = () => {
  return (
    <section id='experience'>
      <h2>My Previous Experience</h2>
      {
        data.map(({ company, title, location, dates, bullets, image }, index) => {
          return (
            <div className='container experience__container'>
              {
                index % 2 === 1 ? <img src={image} alt={company} /> : <></>
              }
              <div>
                <h3 className='experience__company'>{company}</h3>
                <h3 className='experience__title'>{title}</h3>
                <div className='experience__info'>
                  <div className="experience__info-item">
                    <TiLocation className='experience__icon' />
                    <h4>{location}</h4>
                  </div>
                  <div className="experience__info-item">
                    <TiCalendar className='experience__icon' />
                    <h4>{dates}</h4>
                  </div>
                </div>
                <div className='experience__content'>
                  {
                    bullets.map((value) => {
                      return (
                        <article className='experience__details'>
                          <GiSevenPointedStar className='experience__details-icon' />
                          <h4>{value}</h4>
                        </article>
                      )
                    })
                  }
                </div>
              </div>
              {
                index % 2 === 0 ? <img src={image} alt={company} /> : <></>
              }
            </div>
          )
        })
      }
    </section>
  )
}

export default Experience