import React from 'react'
import './about.css'
import Me from '../../assets/portrait.jpg'


const languages = [
    'C++',
    'Python',
    'HTML',
    'CSS',
    'JavaScript',
    'VHDL',
  ]
  
  const frameworks = [
    'scikit-learn',
    'Pandas',
    'BoTorch',
    'Pytorch',
    'Numpy',
    'React.js',
  ]
  
  const tools = [
    'Arduino',
    'Raspberry Pi',
    'Git',
    'GitHub',
    'VS Code',
    'JIRA',
    'Confluence'
  ]

  const About = () => {
    return (
      <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>
  
        <div className='container about__container'>
          <div className='about__me'>
            <div className='about__me-image'>
              <img src={Me} alt='about me image' />
            </div>
          </div>
          <div className='about__content'>
            <div className='about__paragraph'>
              <p>
                I'm a second year computer engineering student at the University of Waterloo, passionate about exploring the intersection of sustainability and technology.
              </p>
            </div>
            <div className='about__skills'>
              <h2>Skills</h2>
              <h3>Languages</h3>
              <ul>
                {
                  languages.map((value) => {
                    return (
                      <li>{value}</li>
                    )
                  })
                }
              </ul>
              <h3>Frameworks/Libraries</h3>
              <ul>
                {
                  frameworks.map((value) => {
                    return (
                      <li>{value}</li>
                    )
                  })
                }
              </ul>
              <h3>Tools</h3>
              <ul>
                {
                  tools.map((value) => {
                    return (
                      <li>{value}</li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default About
