import React, { Component } from 'react'

export default class footer extends Component {
    render() {
        return (
            <div className="mt-0">
                <footer className="footer-distributed mt-0">
                        
                    <div className="footer-left">
        
                    <h3>SHE-Vehicle<span>services</span></h3>
        
                    <p className="footer-links">
                    <a href="#">Home</a>
                    ·
                    
                    
        
                    <a href="#section1">About</a>
                    ·
                    <a href="#"></a>
        
                    <a href="#">Contact</a>
                    </p>
        
                    <p className="footer-company-name">SHE-Vehicle services &copy; 2023</p>
                    </div>
        
                    <div className="footer-center">
        
                    <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>21 Revolution Street</span> Tamilnadu, India</p>
                    </div>
        
                    <div>
                    <i className="fa fa-phone"></i>
                    <p>+1 567 123456</p>
                    </div>
        
                    <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:support@company.com">contact@shevehicle.com</a></p>
                    </div>
        
                    </div>
        
                    <div className="footer-right">
        
                    <p className="footer-company-about">
                    <span>About the company</span>
                    SHE-Vehicle Services is a service provider that helps you Live Smarter;  &amp; Live Better.
                    </p>
        
                    <div className="footer-icons">
        
                    <a href="#"><img src = "/images/facebooklogo.png" alt="fb" width="35px" height="35px"/></a>
                    <a href="#"><img src = "/images/twittericon.jpg" alt="fb" width="35px" height="35px"/></a>
                    <a href="#"><img src = "/images/linkedinicon.jpg" alt="fb" width="35px" height="35px"/></a>
                    <a href="#"><img src = "/images/githubicon.jpg" alt="fb" width="35px" height="35px"/></a>
        
                    </div>
        
                    </div>
            
                </footer>
            </div>
        )
    }
}
