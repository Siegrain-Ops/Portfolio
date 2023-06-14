import React from 'react'
import './skills.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const skills = () => {
  return (
    <section id='skills'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Digital Skills</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <h4>C</h4>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <h4>HTML5</h4>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <h4>CSS3</h4>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <h4>JAVA</h4>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <h4>JAVASCRIPT</h4>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <h4>PYTHON</h4>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <h4>NODE.JS</h4>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <h4>REACT</h4>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <h4>SPRING</h4>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <h4>ORACLE</h4>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <h4>BOOTSTRAP</h4>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/> 
              <h4>JQUERY</h4>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <h4>.NET</h4>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <h4>MYSQL</h4>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <h4>PL/SQL</h4>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <h4>POSTGRES</h4>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <h4>PANDAS</h4>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <h4>SCIKIT-LEARN</h4>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <h4>TENSORFLOW</h4>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <h4>KERAS</h4>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <h4>LINUX</h4>
            </article>
          </div>
        </div>

        <div className='experience_backend'>
          <h3>NON-Techinical Skills</h3>
          <div className='experience_content'>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <h4>Experience talking with clients</h4>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <h4>Extroverted behaviour</h4>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <h4>Shaper and teamworker in Belbin roles</h4>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <h4>Critical thinking</h4>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <h4>Cool Minded</h4>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <h4>Good communication</h4>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <h4>Adaptability</h4>
              </article>
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <h4>Fast Learner</h4>
              </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default skills