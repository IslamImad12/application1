import React from 'react'
import img4 from '../../images/img10.jpg'
export default function Ser10() {
  return <>
        <div className="container py-5">
                <h2 className='text-center'>We Are Professional In:</h2>
                <div>
                    <div className="row">
                    <div className="col-md-6">
                    <h4>10. Marketing and Branding Studies</h4>
                        <p>
                        - Brand Positioning Studies: Understanding how to effectively position a brand in the marketplace.
                        - Customer Segmentation Studies: Identifying key customer segments and targeting them with personalized strategies.
                        - Marketing Strategy Development: Creating comprehensive marketing plans, including digital and offline channels.
                        - Advertising Effectiveness Studies: Analyzing the impact of advertising campaigns on brand awareness and sales.
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