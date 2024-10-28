import React from 'react'
import img1 from '../../images/16169.jpg'
export default function Ser1() {
  return <>
      <div className="container py-5">
        <h2 className='text-center'>We Are Professional In:</h2>
        <div>
            <div className="row">
            <div className="col-md-6">
                    <h4>1. Feasibility Studies</h4>
                    <p>
                    - Business Feasibility Study: Assessing the viability of new business ventures (e.g., real estate, retail, manufacturing). <br />
                    - Market Feasibility: Evaluating market demand, competition, target audience, and trends for a product or service. <br />
                    - Technical Feasibility: Assessing the technological and logistical requirements of a project (e.g., software development, manufacturing). <br />
                    - Operational Feasibility: Studying the operational aspects, including resource availability, workflow efficiency, and potential bottlenecks. <br />
                    - Financial Feasibility: Providing detailed financial projections, including ROI, cash flow, and break-even analysis. <br />
                    </p>
            </div>
            <div className="col-md-6 py-4">
                <img src={img1} className='w-100 h-100 img1' alt="" />
            </div>
            

            </div>
            

            
        </div>
        
    </div>
  </>
}
