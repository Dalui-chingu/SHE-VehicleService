import React,{Component} from 'react';
import {Carousel} from 'react-bootstrap';
import './main.css';
import Navbarwhole from './navbarwhole';
import Footer from './footer';
import About from './About';
import Services from './Services';
import Gallery from './Gallery';
const axios=require('axios');





class Home extends Component{
    
    constructor(props){
        super(props);
    }

    Carcare(){
        localStorage.setItem('service','Carcare');
        this.props.history.push("/book");
    }
    Carpenter(){
        localStorage.setItem('service','Carpenter');
        this.props.history.push("/book");
    }
    Cleaning(){
        localStorage.setItem('service','Cleaning');
        this.props.history.push("/book");
    }
    Electrician(){
        localStorage.setItem('service','Electrician');
        this.props.history.push("/book");
    }
    Painting(){
        localStorage.setItem('service','Painting');
        this.props.history.push("/book");
    }
    Plumber(){
        localStorage.setItem('service','Plumber');
        this.props.history.push("/book");
    }
    
    render() {
        return (
        <div className="bgi tm-proh">
            <Navbarwhole/>
            <section className="tm-flex-container">
            {/* Left Side */}
          <div className="tm-left-content">
            <h1>Amazing deals for doorstep car servicing now at your fingertips</h1>
            <h4 className='grey'>We get the garage right to your door.</h4>
           <button className='btn-class'>Book a service</button>
            {/* Add more content for left side as needed */}
          </div>

          {/* Right Side */}
          <div className="tm-right-content">
            <Carousel>
              <Carousel.Item>
                <lottie-player src="https://lottie.host/1b94d87b-f5ea-4a02-92a0-6324f8fd6bde/liyhOIbDGh.json" background="#FFFFFF" style={{
                  width: "100%",
                  height: "100%"
                }} speed="1" loop autoplay direction="1" mode="normal"></lottie-player>
              </Carousel.Item>
            </Carousel>
            {/* Add more content for right side as needed */}
          </div>
        </section>
        <section >
    <p className="tm-con2">
        <h1 id="services">OUR SERVICES</h1>
    </p>
    <p className="tm-containerim">
        <img src="images/carcare.png" alt="img" onClick = {this.Carcare.bind(this)} className="tm-containerimg"/>
    </p>
    <p className="tm-containerim">
        <img src="images/carpenter.png" alt="img" onClick = {this.Carpenter.bind(this)} className="tm-containerimg"/>
    </p>
    <p className="tm-containerim">
        <img src="images/cleaning.png" alt="img" onClick = {this.Cleaning.bind(this)} className="tm-containerimg"/>
    </p>
    <p className="tm-containerim">
        Car & Bike services
    </p>
    <p className="tm-containerim">
        Periodic services
    </p>
    <p className="tm-containerim">
        Cleaning
    </p>
   
  
</section>
        <p className="tm-con2"></p>
        <div className="thm p-5">
        <div class="row">
        <div class="column">
            <div class="card" style={{backgroundColor: "#00C1A3"}}>
            <p><i class="fa fa-user"></i></p>
            <h3>11+</h3>
            <p>Partners</p>
            </div>
        </div>

        <div class="column">
            <div class="card" style={{backgroundColor: "black"}}>
            <p><i class="fa fa-check"></i></p>
            <h3>55+</h3>
            <p>Projects</p>
            </div>
        </div>
        
        <div class="column">
            <div class="card" style={{backgroundColor: "#00C1A3"}}>
            <p><i class="fa fa-smile-o"></i></p>
            <h3>100+</h3>
            <p>Happy Clients</p>
            </div>
        </div>
        <div class="column">
            <div class="card" style={{backgroundColor: "black"}}>
            <p><i class="fa fa-coffee"></i></p>
            <h3>100+</h3>
            <p>Meetings</p>
            </div>
        </div>
        </div>
        </div>
<About/>
                <Gallery/>
        

        <p className = "tm-con2">
                    <h1>OUR TEAM</h1>
        </p>
        <div class="row12">
        <div class="column11">
            <div class="card12">
            <img src="/images/profile.jpg" alt="Dhivagar" width="200px" height="200px" />
            <div class="container12">
                <h6 ><strong >Gowrisubha K</strong></h6>
                <p class="title12">Developer</p>
                <p>Ph : 2342445452</p>
                <p>kgs@example.com</p>
                <p><button class="button12">Contact</button></p>
            </div>
            </div>
        </div>
        <center><div class="column12">
            <div class="card12">
            <img src="/images/profile.jpg" alt="Piyush" width="200px" height="200px"/>
            <div class="container12">
                <h6><strong>Dhanusri T K</strong></h6>
                <p class="title12">Developer</p>
                <p>ph : 2345753421</p>
                <p>dhanu@example.com</p>
                <p><button class="button12">Contact</button></p>
            </div>
            </div>
        </div>
        </center>
        <div class="column12">
            <div class="card12">
            <img src="/images/profile.jpg" alt="Saisyama" width="200px" height="200px"/>
            <div class="container12">
                <h6><strong>Harini</strong></h6>
                
                <p class="title12">Developer</p>
                <p>ph : 1236895432</p>
                <p>harini@example.com</p>
                <p><button class="button12">Contact</button></p>
            </div>
            </div>
        </div>
        </div>
        <Footer/>
        </div>
    )
  }
}

export default Home;