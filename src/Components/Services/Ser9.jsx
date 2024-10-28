import React from 'react'
import img4 from '../../images/img9.jpg'
export default function Ser9() {
  return <>
        <div className="container py-5">
                <h2 className='text-center'>We Are Professional In:</h2>
                <div>
                    <div className="row">
                    <div className="col-md-6">
                    <h4>9. Risk Analysis and Management Studies</h4>
                        <p>
                        - Risk Assessments: Identifying and analyzing potential risks in business operations, financial management, or projects.
                        - Contingency Planning: Developing strategies to mitigate identified risks and ensure business continuity.
                        - Compliance Studies: Ensuring compliance with legal and regulatory frameworks in various industries (e.g., healthcare, finance).
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