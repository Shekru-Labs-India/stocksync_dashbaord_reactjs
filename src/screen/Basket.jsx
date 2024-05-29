// import React from 'react'
// import Header from '../component/Header'
// import SubHeader from '../component/SubHeader'
// import Footer from '../component/Footer'

// const Basket = () => {
//   return (
//     <div>
//     <div classNameName="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
//         <div classNameName="layout-container">
//  <Header></Header>
//  <SubHeader></SubHeader>
//  <div className="container-xxl flex-grow-1 container-p-y">
//  <div class="card">
//   <div class="card-datatable table-responsive pt-0">
//   <div className="col-md-4">
       
//     <table class="table">
          
           
//             <tbody>
//               <tr>
//                 <td>New_Basket</td>
               
//               </tr>
//               <tr>
//                 <td>Total:1/10</td>
//                 <td>Buy:1/10</td>
//                 <td>Sell:0/10</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//  </div>
//  </div>
//  <Footer></Footer>

//  </div>
//  </div>
// </div>
// </div>
//   )
// }

// export default Basket


import React from 'react'
import Header from '../component/Header'
import SubHeader from '../component/SubHeader'
import Footer from '../component/Footer'

const Basket = () => {
  // Assuming buyCount and sellCount are received as props or retrieved from a state
  const buyCount = 1;
  const sellCount = 3;

  return (
    <div>
      <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
        <div className="layout-container">
          <Header />
          <SubHeader />
          <div className="container-xxl flex-grow-1 container-p-y ">
            <div className='row'>
                <div className='col-3'>
            <div class="card">
              <div class="card-datatable table-responsive pt-0">
               
                  <table class="table">
                    <tbody>
                      <tr>
                        <td className='fw-bold'>New_Basket</td>
                        <td></td>
                        <td className='text-danger'><i className="ri-close-circle-line"></i></td>
                      </tr>
                      <tr>
                        <td>Total:1/10</td>
                        
                        {/* Apply conditional classes for Buy and Sell counts */}
                        <td>
                          {/* Apply conditional classes for Buy count */}
                          <span className={buyCount > 0 ? 'text-success' : ''}>Buy:{buyCount}</span>/10
                        </td>
                        <td>
                          {/* Apply conditional classes for Sell count */}
                          <span className={sellCount > 0 ? 'text-danger' : ''}>Sell:{sellCount}</span>/10
                        </td>
                      </tr>
                    </tbody>
                  </table>
               
              </div>
            </div>
         
          </div>
          <div className='col-9'>
            <div class="card">
                </div>
                </div>
        </div>
      </div>
    </div>
      </div>
      <Footer />
    </div>
  )
}

export default Basket
