import React from 'react'
import img4 from '../../images/img4.jpg'
export default function Ser4() {
  return <>
        <div className="container py-5">
                <h2 className='text-center'>We Are Professional In:</h2>
                <div>
                    <div className="row">
                    <div className="col-md-6">
                    <h4>4. Sustainability Studies</h4>
                        <p>
                        - Environmental Impact Assessment (EIA): Evaluation of environmental risks and sustainability impacts of projects (e.g., construction, energy projects). <br />
                        - Energy Efficiency Studies: Analyzing energy consumption and recommending strategies for energy optimization and sustainability. <br />
                        - Green Building Studies: Providing analysis on sustainable construction materials, energy conservation, and green certification (LEED, BREEAM). <br />
                        - Sustainability Audits: Assessing a company’s environmental footprint and recommending practices to enhance sustainability. <br />
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