import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.png';
import {HiCheckCircle} from 'react-icons/hi';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Bitcoin Auto Trading',
    github: "https://github.com/skwon2345/bitcoin_auto_trader",
    stacks: ["Python", "Redis"]
  },
  {
    id: 2,
    image: IMG2,
    title: 'Stock Reporter',
    github: "https://github.com/skwon2345/stock_reporter",
    stacks: ["Python", "mongodb"]
  },
  {
    id: 3,
    image: IMG3,
    title: 'Room Rent App (IOS)',
    github: "https://github.com/skwon2345/vancouver_room_rent_app",
    stacks: ["Swift", "firebase"]
  },
  {
    id: 4,
    image: IMG4,
    title: 'Starcraft Mocking',
    github: "https://github.com/skwon2345/starcraft_demo",
    stacks: ["Java"]
  },
  {
    id: 5,
    image: IMG5,
    title: 'RPG Game',
    github: "https://github.com/skwon2345/rpg",
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
                  <a href={github} className='btn btn-primary' target="_blank">Github</a>
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