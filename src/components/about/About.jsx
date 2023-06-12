import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FaGraduationCap} from 'react-icons/fa'
import {MdWork} from 'react-icons/md'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h5>About Me</h5>

      <div className='about_content'>
        <div className='about_cards'>
          <article className='about_card'>
            <FaAward className='about_icon' />
            <h5>Experience</h5>
            <small>1+ Years Working</small>
          </article>

          <article className='about_card'>
            <FaGraduationCap className='about_icon' />
            <h5>Education</h5>
            <small>BCs in Computer and System Engineering</small>
          </article>

          <article className='about_card'>
            <MdWork className='about_icon' />
            <h5>Latest Job</h5>
            <small>Solutions Developer</small>
          </article>
        </div>

        <p>
          Hi, I’m Angelo, I’m 23yo and I graduated at Sapienza Università di Roma in Computer and Systems Engineering.

          Since when I was little I used to love technology and I was always fascinated about how things I used everyday really works. 
          Today like yesterday I'm still profoundly attracted by progress and new technologies, that's why I seek constant improving and knowledge, that's why I'm always highly motivated on my job, because I'm learning or perfectioning something that I made part of me.

          I'm extremely extrovert and full of energy so I can build strong relationship with my team really fast and make connections between members more proficient and colorful.

          I have a keen eye for details and if needed I can deliver very useful ideas for every aspect of the project. I am always committed to delivering high-quality results within given timelines.
        </p>

        <a href='#contacts' className='btn btn-primary'>Let's Talk</a>
      </div>
    </section>
  )
}

export default about