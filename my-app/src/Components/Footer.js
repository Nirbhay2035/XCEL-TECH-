import React from 'react';

export default function Footer() {
  return (
    <>
      <div className='bg-black-900'>
        {/* <!-- Footer --> */}
        <footer class="text-center text-lg-start text-light ">
          {/* <!-- Section: Social media --> */}

          {/* <!-- Section: Links  --> */}
          <section class="pt-2"  >
            <div class="container text-center text-md-start mt-5">
              {/* <!-- Grid row --> */}
              <div class="row mt-3">
                {/* <!-- Grid column --> */}
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4" >

                  <img src="2.svg" alt="Logo" className='logo' style={{ marginTop: '-15vh' }} />

                  <p style={{ marginTop: '-11vh', fontSize: '0.8em' }}>
                    Excel-com is the largest Multi-System Operator and a leading Private Broadband Service provider in India. We aim to offer services that combine the best of entertainment and connectivity.
                  </p>
                  <div>
                    <a href="" class="me-4 text-reset">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                      <i class="fab fa-google"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                      <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                      <i class="fab fa-github"></i>
                    </a>
                  </div>

                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-1">
                  {/* <!-- Links --> */}
                  <h6 class="text-uppercase fw-bold mb-4">
                    BroadBand
                  </h6>
                  <p className='mb-1'>
                    <a href="#!" class="text-reset text-deco">Broadband Connection</a>
                  </p>
                  <p className="mb-1">
                    <a href="#!" class="text-reset text-deco"> Consumer Charter</a>
                  </p>
                  <p className='mb-1'>
                    <a href="#!" class="text-reset text-deco">Appellate Authority</a>
                  </p>
                  <p className='mb-1'>
                    <a href="#!" class="text-reset text-deco">Xcel-Tech</a>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 class="text-uppercase fw-bold mb-4">
                    Digital Cable TV
                  </h6>
                  <p className='mb-1' >
                    <a href="#!" class="text-reset text-deco " >Companies</a>
                  </p>
                  <p className='mb-1'>
                    <a href="#!" class="text-reset text-deco">Consumer Corner</a>
                  </p>
                  <p className='mb-1'>
                    <a href="#!" class="text-reset text-deco">Basic Trouble Shooting</a>
                  </p>
                  <p className='mb-1'>
                    <a href="#!" class="text-reset text-deco">Locate Us</a>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* <!-- Links --> */}
                  <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                  <p><i class="fas fa-home me-2"></i> Block A,1002 Emaad Heights, Sharkhej, Ahmedabad-380055</p>
                  <p>
                    <i class="fas fa-envelope me-3"></i>
                    <a href="mailto:Business@excelcomllp.com">Business@excelcomllp.com </a>
                  </p>
                  <p><i class="fas fa-phone me-3"></i> +91 77780 70271</p>
                  {/* <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p> */}
                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row --> */}
            </div>
          </section>

          {/* <!-- Section: Social media --> */}

          {/* <!-- Section: Links  --> */}

          {/* <!-- Copyright --> */}
          {/* <div class="text-center p-4" >
            © 2024 Copyright:
            <a class="text-reset fw-bold" href="https://fonts.google.com/">Xcel-Tech</a>
          </div> */}
          <hr></hr>
          <p className="text-center d-flex justify-content-center align-items-center " style={{ marginTop: '-35px' }}>
            <span style={{ marginRight: '-25px', fontSize: '20PX' }}>© 2024 Copyright:</span>
            <span>
              <img src="2.svg" className="logo" style={{ marginTop: '0', height: '18vh' }} />
            </span>
            <span style={{ marginLeft: '-25px', fontSize: '20PX' }}>All Rights Reserved</span>
          </p>
          {/* <!-- Copyright --> */}
        </footer>      {/* <!-- Footer --> */}
      </div>
  
    </>
  );
}
