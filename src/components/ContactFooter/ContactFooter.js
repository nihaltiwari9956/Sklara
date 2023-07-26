import React from 'react'
import "./ContactFooter.css"

export default function ContactFooter() {
  return (
    <div>
      <div className='cf-end-div'>
          <div className='inner-cf-end text-center'>
            <h3>Do you need support in using the Talent Platform or Sklara Joyn?</h3>
            <p>Feel free to contact our IT Support.</p>
            <button type="button" className="btn mx-1 px-4">Emqail Us</button>
            <button type="button" className="btn mx-1 px-4">Call Us</button>
          </div>
        </div>
    </div>
  )
}
