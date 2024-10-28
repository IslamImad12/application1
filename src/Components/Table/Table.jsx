import React from 'react'
import { Link } from 'react-router-dom'

export default function Table() {
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
          <th scope="row"><Link class="nav-link active" aria-current="page" to="/about">About Us</Link></th>
        </tr>
        <tr>
          <th scope="row"><a href="/table2">Services Overview</a></th>
        </tr> 
        <tr>
          <th scope="row"><a href="/about">Case studies / Portfolio</a></th>
        </tr> 
        <tr>
          <th scope="row"><a href="/contact">Contact Section</a></th>
        </tr> 
      </tbody>
      </table>
    </div>
  </div>
  </>
}
