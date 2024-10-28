import React from 'react'
import img4 from '../../images/img7.jpg'
export default function Ser7() {
  return <>
        <div className="container py-5">
                <h2 className='text-center'>We Are Professional In:</h2>
                <div>
                    <div className="row">
                    <div className="col-md-6">
                    <h4>7. Technical and Engineering Studies</h4>
                        <p>
                        - Technical Assessments: Evaluating engineering project feasibility, technology needs, and production methods.
                        - Product Development Feasibility: Assessing the viability of developing new products from a technical and market perspective.
                        - System Design Studies: Studies related to the design and implementation of IT, infrastructure, and logistics systems.
                        </p>
                    </div>
                    <div className="col-md-6 py-4">
                    <img src={img4} className='w-100' alt="" />
                    </div>
                    
                    </div>

                    </div>
        </div>
  </>
}