import React from 'react'
import contact from '../../images/contact.jpg'
export default function Contact() {
  return <>
  <div className="contact py-3">
    <div className="container">
        <div className="row">
            <div className="col-md-6 my-5 py-5">
                <input type="text" placeholder='Your Name' className='form-control my-3' />
                <input type="text" placeholder='Your Email' className='form-control my-3' />
                <textarea type="text" placeholder='Your Message'  className='form-control my-3' ></textarea>
                <button className='btn btn-danger'>send message</button>
            </div>
            <div className="col-md-6">
                <img src={contact} className='w-100' alt="" />
            </div>
        </div>
    </div>
  </div>
  </>
}
