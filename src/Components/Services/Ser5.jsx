import React from 'react'
import img4 from '../../images/img5.jpg'
export default function Ser5() {
  return <>
        <div className="container py-5">
                <h2 className='text-center'>We Are Professional In:</h2>
                <div>
                    <div className="row">
                    <div className="col-md-6">
                    <h4>5. Real Estate and Property Studies</h4>
                        <p>
                        - Real Estate Feasibility: Assessing the viability of real estate projects, including market demand, financial analysis, and risk assessment.
                        - Urban Planning Studies: Evaluating land use, zoning regulations, and infrastructure needs for urban development projects.
                        - Site Selection Studies: Analyzing optimal locations for new businesses or real estate development based on market conditions and logistical factors.
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