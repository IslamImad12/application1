import React from 'react'
import { Link } from 'react-router-dom'

export default function Table2() {
  return <>
   <div className="table" id='table'>
    <div className="container py-5">
    <table class="table text-center table-striped table-bordered ">
      <thead>
        <tr>
          <th scope="col"><h2>Table of Contents</h2></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"><Link class="nav-link active" aria-current="page" to="/Ser1">1. Feasibility Studies</Link></th>
        </tr>
        <tr>
          <th scope="row"><Link class="nav-link active" aria-current="page" to="/Ser2">2. Market Research Reports</Link></th>
        </tr>
        <tr>
          <th scope="row"><Link class="nav-link active" aria-current="page" to="/Ser3">3. Business Plans</Link></th>
        </tr>
        <tr>
          <th scope="row"><Link class="nav-link active" aria-current="page" to="/Ser4">4. Sustainability Studies</Link></th>
        </tr>
        <tr>
          <th scope="row"><Link class="nav-link active" aria-current="page" to="/Ser5">5. Real Estate and Property Studies</Link></th>
        </tr>
        <tr>
          <th scope="row"><Link class="nav-link active" aria-current="page" to="/Ser6">6. Financial Analysis and Projections</Link></th>
        </tr>
        <tr>
          <th scope="row"><Link class="nav-link active" aria-current="page" to="/Ser7">7. Technical and Engineering Studies</Link></th>
        </tr>
        <tr>
          <th scope="row"><Link class="nav-link active" aria-current="page" to="/Ser8">8. Human Resource Studies</Link></th>
        </tr>
        <tr>
          <th scope="row"><Link class="nav-link active" aria-current="page" to="/Ser9">9. Risk Analysis and Management Studies</Link></th>
        </tr>
        <tr>
          <th scope="row"><Link class="nav-link active" aria-current="page" to="/Ser10">10. Marketing and Branding Studies</Link></th>
        </tr>
        {/* <tr>
          <th scope="row"><Link class="nav-link active" aria-current="page" to="/about">11. Healthcare Studies</Link></th>
        </tr>
        <tr>
          <th scope="row"><Link class="nav-link active" aria-current="page" to="/about">
          12. Supply Chain and Logistics Studies</Link></th>
        </tr>
        <tr>
          <th scope="row"><Link class="nav-link active" aria-current="page" to="/about">
          13. Investment Proposals</Link></th>
        </tr>
        <tr>
          <th scope="row"><Link class="nav-link active" aria-current="page" to="/about">
            14. Art and Collectibles Investment Feasibility</Link></th>
        </tr>
        <tr>
          <th scope="row"><Link class="nav-link active" aria-current="page" to="/about">
          15. Yacht, Aviation, and Luxury Transport Feasibility Studies</Link></th>
        </tr> */}
        
      </tbody>
      </table>
    </div>
  </div>
  </>
}
