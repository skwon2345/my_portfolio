import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';
import {BsPatchCheckFill} from 'react-icons/bs';
import {HiCheckCircle} from 'react-icons/hi';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Auto Trading',
    github: "https://github.com",
    stacks: ["Python", "Redis"]
  },
  {
    id: 2,
    image: IMG1,
    title: 'Stock Reporter',
    github: "https://github.com",
    stacks: ["Python", "mongodb"]
  },
  {
    id: 3,
    image: IMG1,
    title: 'Vancouver Room Rent App (IOS)',
    github: "https://github.com",
    stacks: ["Swift", "firebase"]
  },
  {
    id: 4,
    image: IMG1,
    title: 'Starcraft Mocking Game',
    github: "https://github.com",
    stacks: ["Java"]
  },
  {
    id: 5,
    image: IMG1,
    title: 'RPG Game',
    github: "https://github.com",
    stacks: ["C++"]
  }

]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, stacks}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='fe'>
                  {
                    stacks.map((stacks) => {
                      return (
                        <article className='portfolio__stack'>
                          <HiCheckCircle className='portfolio__stack-icon'/>
                          <small className='text-light'>{stacks}</small>
                        </article>
                      )
                    })
                  }
                </div>
                
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn btn-primary'>Github</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio