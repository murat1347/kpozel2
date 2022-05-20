import React from 'react'
import { fetchLogin } from '../../context/api';
import validationSchema from './validations';
import { useFormik } from 'formik';
import { useAuth } from '../../context/AuthContext';
function Signin({ history }) {

    const { login } = useAuth();
    const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      try {
        const loginResponse = await fetchLogin(values);
        login(loginResponse);
        history.push('/profile');
      } catch (e) {
        bag.setErrors({ general: e.response.data.message });
      }
    },
  });
  return (

    <div>

		<title>Layouts | Porto Admin - Responsive HTML5 Template 2.1.1</title>
		<meta name="keywords" content="HTML5 Admin Template" />
		<meta name="description" content="Porto Admin - Responsive HTML5 Template" />
		<meta name="author" content="okler.net" />

		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

	
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800|Shadows+Into+Light" rel="stylesheet" type="text/css" />

	
		<link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.css" />
		<link rel="stylesheet" href="vendor/animate/animate.css" />

		<link rel="stylesheet" href="vendor/font-awesome/css/fontawesome-all.min.css" />
		<link rel="stylesheet" href="vendor/magnific-popup/magnific-popup.css" />
		<link rel="stylesheet" href="vendor/bootstrap-datepicker/css/bootstrap-datepicker3.css" />


		<link rel="stylesheet" href="vendor/owl.carousel/assets/owl.carousel.css" />
		<link rel="stylesheet" href="vendor/owl.carousel/assets/owl.theme.default.css" />


		<link rel="stylesheet" href="css/theme.css" />


		<link rel="stylesheet" href="css/skins/default.css" />


		<link rel="stylesheet" href="css/custom.css" />


		<script src="vendor/modernizr/modernizr.js"></script>
    
    <div>    
           
          
    
           
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    
         
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800|Shadows+Into+Light" rel="stylesheet" type="text/css" />
    
            <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.css" />
            <link rel="stylesheet" href="vendor/animate/animate.css" />
    
            <link rel="stylesheet" href="vendor/font-awesome/css/fontawesome-all.min.css" />
            <link rel="stylesheet" href="vendor/magnific-popup/magnific-popup.css" />
            <link rel="stylesheet" href="vendor/bootstrap-datepicker/css/bootstrap-datepicker3.css" />
    
     
            <link rel="stylesheet" href="css/theme.css" />
    
         
            <link rel="stylesheet" href="css/skins/default.css" />
    
            <link rel="stylesheet" href="css/custom.css"/>
    

            <script src="vendor/modernizr/modernizr.js"></script>
    
        
        
           
            <section class="body-sign">
                <div class="center-sign">
                    <a href="/" class="logo float-left">
                        <img src="img/logo.png" height="54" alt="Porto Admin" />
                    </a>
    
                    <div class="panel card-sign">
                        <div class="card-title-sign mt-3 text-right">
                            <h2 class="title text-uppercase font-weight-bold m-0"><i class="fas fa-user mr-1"></i> Sign In</h2>
                        </div>
                        <div class="card-body">
                            <form action="index.html" method="post">
                                <div class="form-group mb-3">
                                    <label>Username</label>
                                    <div class="input-group">
                                        <input name="username" type="text" value={formik.values.email} class="form-control form-control-lg" />
                                        <span class="input-group-append">
                                            <span class="input-group-text">
                                                <i class="fas fa-user"></i>
                                            </span>
                                        </span>
                                    </div>
                                </div>
    
                                <div class="form-group mb-3">
                                    <div class="clearfix">
                                        <label class="float-left">Password</label>
                                        <a href="pages-recover-password.html" class="float-right">Lost Password?</a>
                                    </div>
                                    <div class="input-group">
                                        <input name="pwd" type="password" value={formik.values.password} class="form-control form-control-lg" />
                                        <span class="input-group-append">
                                            <span class="input-group-text">
                                                <i class="fas fa-lock"></i>
                                            </span>
                                        </span>
                                    </div>
                                </div>
    
                                <div class="row">
                                    <div class="col-sm-4">
                                        <div class="checkbox-custom checkbox-default">
                                            <input id="RememberMe" name="rememberme" type="checkbox"/>
                                            <label for="RememberMe">Remember Me</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-8 text-right">
                                        <button type="submit" class="btn btn-primary mt-2">Sign In</button>
                                    </div>
                                </div>
    
                                <span class="mt-3 mb-3 line-thru text-center text-uppercase">
                                    <span>or</span>
                                </span>
    
                                <div class="mb-1 text-center">
                                    <a class="btn btn-facebook mb-3 ml-1 mr-1" href="#">Connect with <i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-twitter mb-3 ml-1 mr-1" href="#">Connect with <i class="fab fa-twitter"></i></a>
                                </div>
    
                                <p class="text-center">Don't have an account yet? <a href="pages-signup.html">Sign Up!</a></p>
    
                            </form>
                        </div>
                    </div>
    
                </div>
            </section>
     
            <script src="vendor/jquery/jquery.js"></script>
            <script src="vendor/jquery-browser-mobile/jquery.browser.mobile.js"></script>
            <script src="vendor/popper/umd/popper.min.js"></script>
            <script src="vendor/bootstrap/js/bootstrap.js"></script>
            <script src="vendor/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
            <script src="vendor/common/common.js"></script>
            <script src="vendor/nanoscroller/nanoscroller.js"></script>
            <script src="vendor/magnific-popup/jquery.magnific-popup.js"></script>
            <script src="vendor/jquery-placeholder/jquery-placeholder.js"></script>
            
           
            <script src="js/theme.js"></script>
            
           
            <script src="js/custom.js"></script>
            
            
            <script src="js/theme.init.js"></script>

        </div>
       </div>
  )
}

export default Signin;