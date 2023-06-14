import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/tensorflow.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio website',
    github: 'https://github.com/Siegrain-Ops/Portfolio'
  }
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {
          data.map(({id,image,title,github}) => {
            return(
              <article key={id} className='portfolio_item'>
                <div className='portfolio?item-image'>
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio