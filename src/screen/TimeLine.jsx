import React from 'react'
import SubHeader from '../component/SubHeader'
import Header from '../component/Header'

const TimeLine = () => {
  return (
    <div>
      <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
      <div className="layout-container">
        <Header />
        <SubHeader />
      
          <div className="container-xxl flex-grow-1 container-p-y">
          <div class="col-xl-6 mb-6 mb-xl-0">
    <div class="card">
      <h5 class="card-header pb-6 text-start">Basic Timeline</h5>
      <div class="card-body">
        <ul class="timeline mb-0">
          <li class="timeline-item timeline-item-transparent">
            <span class="timeline-point timeline-point-primary"></span>
            <div class="timeline-event">
              <div class="timeline-header mb-3">
                <h6 class="mb-0 ">12 Invoices have been paid</h6>
                <small class="text-muted">12 min ago</small>
              </div>
              <p class="mb-5 text-start ">
                Invoices have been paid to the company
              </p>
              <div class="d-flex align-items-center mb-4">
                
                <button
                  className="btn btn-primary active me-3"
                 
                >
                  Load Instrument
                </button>
                <button
                  className="btn btn-primary active "
                 
                >
                 Generate Report
                </button>
                 
                </div>
              </div>
            
          </li>
          <li class="timeline-item timeline-item-transparent">
            <span class="timeline-point timeline-point-success"></span>
            <div class="timeline-event">
              <div class="timeline-header mb-3">
                <h6 class="mb-0">Client Meeting</h6>
                <small class="text-muted">45 min ago</small>
              </div>
              <p class="mb-2 text-start">
                Project meeting with john @10:15am
              </p>
              <div class="d-flex justify-content-between flex-wrap gap-2">
                <div class="d-flex flex-wrap align-items-center">
                
                  
                </div>
              </div>
            </div>
          </li>
          <li class="timeline-item timeline-item-transparent">
            <span class="timeline-point timeline-point-info"></span>
            <div class="timeline-event">
              <div class="timeline-header mb-3">
                <h6 class="mb-0">Create a new project for client</h6>
                <small class="text-muted">2 Day Ago</small>
              </div>
              <p class="mb-2 text-start">
                6 team members in a project
              </p>
             
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </div>
  </div>
  {/* <!-- /Timeline Basic --> */}

  

   
   </div>
   </div>
  )
}

export default TimeLine
