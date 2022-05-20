import React from 'react'
import Helmet from 'react-helmet'
import Navbar from './Navbar'

function NavbarIndex() {
  return (
    <><div>

      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800|Shadows+Into+Light" rel="stylesheet" type="text/css" />

      <link rel="stylesheet" href="/vendor/bootstrap/css/bootstrap.css" />
      <link rel="stylesheet" href="/vendor/animate/animate.css" />

      <link rel="stylesheet" href="/vendor/font-awesome/css/fontawesome-all.min.css" />
      <link rel="stylesheet" href="/vendor/magnific-popup/magnific-popup.css" />
      <link rel="stylesheet" href="/vendor/bootstrap-datepicker/css/bootstrap-datepicker3.css" />

      <link rel="stylesheet" href="/vendor/owl.carousel/assets/owl.carousel.css" />
      <link rel="stylesheet" href="/vendor/owl.carousel/assets/owl.theme.default.css" />


      <link rel="stylesheet" href="/css/theme.css" />


      <link rel="stylesheet" href="/css/skins/default.css" />


      <link rel="stylesheet" href="css/custom.css" />




      <Navbar />
    </div>
      <Helmet>
      <script src="/vendor/modernizr/modernizr.js"></script>

        
        <script src="/vendor/jquery-browser-mobile/jquery.browser.mobile.js"></script>
        <script src="/vendor/popper/umd/popper.min.js"></script>
        <script src="/vendor/bootstrap/js/bootstrap.js"></script>
        <script src="/vendor/bootstrap-datepicker/js/bootstrap-datepicker.js"> </script>
          <script src="/vendor/common/common.js"></script>
          <script src="/vendor/nanoscroller/nanoscroller.js"></script>
          <script src="/vendor/magnific-popup/jquery.magnific-popup.js"></script>
            <script src="/vendor/jquery-placeholder/jquery-placeholder.js"></script>
              <script src="/vendor/jquery-appear/jquery-appear.js"></script>
              <script src="/vendor/owl.carousel/owl.carousel.js"></script>
              <script src="/vendor/isotope/isotope.js"></script>
              <script src="/js/theme.js"></script>
              <script src="/js/custom.js"></script><script src="/js/theme.init.js"></script>
              <script src="/js/examples/examples.landing.dashboard.js"></script>
      </Helmet> </>)
}

export default NavbarIndex