import React from 'react'
import './projects.css'
import MagicGlove from '../../assets/MagicGlove.png'
import PhaseChangeDetector from '../../assets/FreezingPointSensor.png'
import CO2detector from '../../assets/CO2detector.png'
import { BsGithub, BsYoutube } from 'react-icons/bs'
import { SiDevpost, SiPython, SiJavascript, SiHtml5, SiCss3, SiReact, SiArduino, SiRaspberrypi, SiAdafruit} from 'react-icons/si'

const logos = {
  'Arduino': <SiArduino size={20} />,
  'CSS': <SiCss3 size={20} />,
  'HTML': <SiHtml5 size={20} />,
  'JavaScript': <SiJavascript size={20} />,
  'Python': <SiPython size={20} />,
  'Raspberry Pi': <SiRaspberrypi size={20} />,
  'Feather Microcontroller' : <SiAdafruit size={20} />,
  'React.js': <SiReact size={20} />,
}

const data = [
  {
    image: MagicGlove,
    title: 'The Magic Glove',
    languages: [
      'Raspberry Pi',
      'Python',
    ],
    description: 'Used Raspberry Pi, multiple sensors, and Python to build an assistive device for the visually impaired',
    links: [
      {
        link: 'https://github.com/oykuzun/Magic-Glove',
        icon: <BsGithub />,
      },
      {
        link: 'https://devpost.com/software/the-magic-glove',
        icon: <SiDevpost />,
      },
      {
        link: 'https://www.youtube.com/watch?v=UgMxqQqd3D8',
        icon: <BsYoutube />,
      },
    ]
  },

  {
    image: CO2detector,
    title: 'CO2 Detector',
    languages: [
      'Feather Microcontroller',
      'Python',
    ],
    description: 'Quantified the CO2 present in ambient air using a Feather microcontroller and Python with high accuracy to explore the most optimal conditions/sorbent for CO2 removal',
  },

  {
    image: PhaseChangeDetector,
    title: 'Phase Change Detector',
    languages: [
      'Arduino',
      'Python',
    ],
    description: 'Programmed an Arduino UNO R3 to determine various material properties of water such as the cryoscopic constant.',
  },

]

const Projects = () => {
    return (
      <section id='projects'>
        <h5>Stuff I have worked on</h5>
        <h2>Projects</h2>
        <div className="container projects__container">
          {
            data.map(({ image, title, languages, description, links }) => {
              return (
                <article className='projects__item'>
                  <div className="projects__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <ul>
                    {
                      languages.map((value) => {
                        return (
                          <li>{logos[value]}</li>
                        )
                      })
                    }
                  </ul>
                  <p>{description}</p>
                  <div className='projects__item-btn'>
                    {
                      links.map(({ link, icon }) => {
                        return (
                          <a href={link} target='_blank'>{icon}</a>
                        )
                      })
                    }
                  </div>
                </article>
              )
            })
          }
        </div>
      </section>
    )
  }
  
  export default Projects
