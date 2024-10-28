import React from 'react'
import img4 from '../../images/img8.jpg'
export default function Ser8() {
  return <>
        <div className="container py-5">
                <h2 className='text-center'>We Are Professional In:</h2>
                <div>
                    <div className="row">
                    <div className="col-md-6">
                    <h4>8. Human Resource Studies</h4>
                        <p>
                        - Employee Satisfaction Surveys: Conducting surveys to gauge employee satisfaction and engagement.
                        - Talent Gap Analysis: Identifying skills gaps and creating plans to fill these gaps through recruitment or training.
                        - Workforce Planning Studies: Strategic planning for optimizing workforce efficiency and aligning it with company goals.
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