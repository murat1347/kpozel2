import React from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom';
import "../../App.css"
import { useAuth } from '../../context/AuthContext';
import Routered from '../Routered';

function Navbar({history}) {
	const { logout } = useAuth();
	const handleLogout = async () => {
		logout(() => {
		  history.push('/asd');
		});
	  };
	return (
	
			<div>
				<section className="body">
					<header className="header header-nav-menu header-nav-stripe">
						<div className="logo-container">
							<NavLink className="logo" to="/">
								<img src="img/logo.png" width="85" height="35" alt="Porto Admin" />
							</NavLink>
							<button className="btn header-btn-collapse-nav d-lg-none" data-toggle="collapse" data-target=".header-nav">
								<i className="fas fa-bars"></i>
							</button>
							<div className="header-nav collapse">
								<div className="header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1 header-nav-main-square">
									<nav>
										<ul className="nav nav-pills" id="mainNav">
											<li className="">
												<NavLink className="nav-link" to="/">ANASAYFA</NavLink>
											</li>
											<li className="dropdown">
												<a className="nav-link dropdown-toggle" href="#">
													TAHSİLATLAR
												</a>
												<ul className="dropdown-menu">
													<li>
														<NavLink className="nav-link" to="/form">Form</NavLink>
													</li>
													<li>
														<NavLink className="nav-link" to="/formdemo">FormDemo</NavLink>
													</li>
													<li className="dropdown-submenu">
														<a className="nav-link">
															Advange
														</a>
														<ul className="dropdown-menu">

															<li>
																<NavLink className="nav-link" to="/modals">Modals</NavLink>
															</li>
														</ul>
													</li>
												</ul>
											</li>
										
										</ul>
									</nav>
								</div>
							</div>
							<div className="header-right">
								<div id="userbox" className="userbox">
									<a href="#" data-toggle="dropdown">
										<figure className="profile-picture">
											<img src="img/!logged-user.jpg" alt="Joseph Doe" className="rounded-circle" data-lock-picture="img/!logged-user.jpg" />
										</figure>
										<div className="profile-info" data-lock-name="John Doe" data-lock-email="johndoe@okler.com">
											<span className="name">John Doe Junior</span>
											<span className="role">administrator</span>
										</div>

										<i className="fa custom-caret"></i>
									</a>

									<div className="dropdown-menu">
										<ul className="list-unstyled mb-2">
											<li className="divider"></li>
											<li>
												<a role="menuitem" tabIndex="-1" href="pages-user-profile.html"><i className="fas fa-user"></i> My Profile</a>
											</li>
											<li>
												<a role="menuitem" tabIndex="-1" href="#" data-lock-screen="true"><i className="fas fa-lock"></i> Lock Screen</a>
											</li>
											<li>
												<NavLink  role="menuitem" tabIndex="-1" to={handleLogout}><i className="fas fa-power-off" ></i> Logout</NavLink>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</header>
				
				
				</section>
			</div>
	)
}

export default Navbar