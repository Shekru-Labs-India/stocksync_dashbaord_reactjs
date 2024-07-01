import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';

export default function LandingMain() {
    const [products] = useState([
        {
            id: 1,
            name: 'Product 1',
            price: '100',
            image: 'product-placeholder.svg',
            inventoryStatus: 'INSTOCK'
        },
        {
            id: 2,
            name: 'Product 2',
            price: '150',
            image: 'product-placeholder.svg',
            inventoryStatus: 'LOWSTOCK'
        },
        {
            id: 3,
            name: 'Product 3',
            price: '200',
            image: 'product-placeholder.svg',
            inventoryStatus: 'OUTOFSTOCK'
        },
        {
            id: 4,
            name: 'Product 4',
            price: '250',
            image: 'product-placeholder.svg',
            inventoryStatus: 'INSTOCK'
        },
        {
            id: 5,
            name: 'Product 5',
            price: '300',
            image: 'product-placeholder.svg',
            inventoryStatus: 'LOWSTOCK'
        },
        {
            id: 6,
            name: 'Product 6',
            price: '350',
            image: 'product-placeholder.svg',
            inventoryStatus: 'INSTOCK'
        }
        // Add more products as needed
    ]);

    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const productTemplate = (product) => {
        return (
           <div class="container">
          <div class="swiper-reviews-carousel overflow-hidden mb-12 pt-4">
            <div class="swiper" id="swiper-reviews">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                 
                   
          <div class="card h-100">
          <div class="card-body text-body d-flex flex-column justify-content-between text-center p-lg-8">
            <div class="mb-4">
              <img src="../../assets/img/front-pages/branding/logo-4.png" alt="client logo" class="client-logo img-fluid" />
            </div>
            <p class="text-heading">
              “I've never used a theme as versatile and flexible as Vuexy. It's my go to for building dashboard
              sites on almost any project.”
            </p>
            <div class="text-warning mb-4">
              <i class="tf-icons ri-star-fill ri-24px"></i>
              <i class="tf-icons ri-star-fill ri-24px"></i>
              <i class="tf-icons ri-star-fill ri-24px"></i>
              <i class="tf-icons ri-star-fill ri-24px"></i>
              <i class="tf-icons ri-star-fill ri-24px"></i>
            </div>
            <div>
              <h6 class="mb-1">Eugenia Moore</h6>
              <p class="mb-0 small">Founder of Hubspot</p>
            </div>
          </div>
        </div>
    </div>
    </div>
    </div></div>
    </div>
         
           
        );
    };

    return (
      <section id="landingFeatures" class="section-py mt-12 bg-white landing-features landing-reviews">
<div class="container my-6 mb-12">
        
        <h6 class="text-center d-flex justify-content-center align-items-center mb-6">
          <img src="../../assets/img/front-pages/icons/section-tilte-icon.png" alt="section title icon" class="me-2" height="19" />
          <span class="text-uppercase">real customers reviews</span>
          </h6>   
         
     

         <Carousel value={products} numScroll={1} numVisible={1} responsiveOptions={responsiveOptions} itemTemplate={productTemplate}    autoplayInterval={3000} />
     </div> 
        </section>
    );
}
