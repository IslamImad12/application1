import React from 'react'
import img3 from '../../images/2148339372.jpg'
export default function Ser3() {
  return <>
        <div className="container py-5">
                <h2 className='text-center'>We Are Professional In:</h2>
                <div>
                    <div className="row">
                    <div className="col-md-6">
                    <h4>3. Business Plans</h4>
                            <p>
                            - Startup Business Plans: Structured plans outlining market strategy, funding requirements, financial forecasts, and operational plans for startups. <br />
                            - Expansion Plans: For businesses looking to enter new markets or diversify their product lines. <br />
                            - Strategic Business Plans: Long-term strategic planning for business growth and sustainability. <br />
                            - Investment Proposals: Custom business plans for securing investments from venture capital or angel investors. <br />
                            </p>
                    </div>
                    <div className="col-md-6 py-4">
                        <img src={img3} className='w-100 h-100' alt="" />
                    </div>
                    
                    </div>

                    </div>
        </div>
  </>
}
