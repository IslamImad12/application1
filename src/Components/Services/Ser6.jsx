import React from 'react'
import img4 from '../../images/img6.jpg'
export default function Ser6() {
  return <>
        <div className="container py-5">
                <h2 className='text-center'>We Are Professional In:</h2>
                <div>
                    <div className="row">
                    <div className="col-md-6">
                    <h4>6. Financial Analysis and Projections</h4>
                        <p>
                        - Financial Modeling: Creating detailed financial models to assess the impact of various business scenarios.
                        - Cash Flow Forecasting: Predicting future cash flows based on historical data and business strategies.
                        - Budgeting and Cost Analysis: Developing comprehensive budget plans and performing cost-benefit analyses.
                        - Investment Feasibility: Analyzing the financial viability of investment projects, including payback period, NPV, and IRR.
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