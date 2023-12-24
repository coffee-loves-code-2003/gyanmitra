import React, { useState } from 'react';
import img1 from '../Images/Gyanmitra_24__1_-removebg-preview.png';
import styles from '../event.module.css';
import '../Images/bootstrap.min.css';

function Workshop() {
    const [activeTab, setActiveTab] = useState('all');
    const handleTabClick = (tabId) => {
      setActiveTab(tabId);
    };
  return (
    <body className={`${styles.workshopbody} `}>

    
    <section id="Home">
    <div className="container">
        <div className="header-content">
            
            <img src={img1} width="40%" className="d-block mx-auto"/>
        </div>
    </div>


    
    <div className="container">
       <h1 className={`${styles.title} text-center py-4`} >Workshops</h1>
      
      <ul className={`${styles.nav_tabs1} nav nav-tabs`}>
       <div className={`${styles.container_tab}`}>
        <ul className={`${styles.nav_tabs1} nav nav-tabs`}>
          <li className= "nav-item">
          <a className={`${styles.nav_link1} nav-link active `}
            onClick={() => handleTabClick('all')}>All</a>
          </li>
          <li className="nav-item">
          <a
            className={`${styles.nav_link1} nav-link `}
            onClick={() => handleTabClick('civil/arch')}>Civil/Arch</a>
                    </li>
          <li className="nav-item">
          <a
            className={`${styles.nav_link1} nav-link `}
            onClick={() => handleTabClick('eee')}>EEE</a>          </li>
          <li className="nav-item">
          <a
            className={`${styles.nav_link1} nav-link `}
            onClick={() => handleTabClick('ece')}>ECE/BME</a>          </li><li className="nav-item">
<a
            className={`${styles.nav_link1} nav-link `}
            onClick={() => handleTabClick('cse')}>CSE/IT/AIDS</a>          </li>
            <li className="nav-item">
            <a
            className={`${styles.nav_link1} nav-link `}
            onClick={() => handleTabClick('mech')}>MECH</a>          </li><li className="nav-item">
<a
            className={`${styles.nav_link1} nav-link `}
            onClick={() => handleTabClick('biotech')}>BIOTECH</a>          </li><li className="nav-item">
<a
            className={`${styles.nav_link1} nav-link `}
            onClick={() => handleTabClick('mca')}>MCA</a>          </li>
          <li className="nav-item">
          <a
            className={`${styles.nav_link1} nav-link `}
            onClick={() => handleTabClick('mathematics')}>MATHEMATICS</a>          </li>
          
        </ul>
      </div>
      </ul>
      <div className="container">
        <div className="tab-content">
          <div className={activeTab==='all'? "tab-pane active":"tab-pane" }>
            <div className= {`${styles.row1} row justify-content-center `}>
              <div className="col-md-4 d-flex justify-content-center h-100 ">
                  <div className={`${styles.cb1} ${styles.card1} card m-5  text-center `}>
                      <div className="card-body">
                        
                        
                        <h5 className="card-title mb-4 fw-bolder">Mastering structural excellence: ETABS workshop for RCC framed structures</h5>
                        <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className={`${styles.btn1} btn btn-outline-light  `}>Explore</a>
                        <div className="card-dept m-2 fw-bold">Civil/Arch Feb-17</div>
                        
                      </div>
                    </div>
              </div>
              <div className="col-md-4 d-flex justify-content-center h-100">
                  <div className={`${styles.cb2} ${styles.card1} card m-5  text-center `}>
                      <div className="card-body">
                        <h5 className="card-title mb-4 fw-bolder">Analysis of wind force on tall buildings using CFD</h5>
                        <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
                        <div className="card-dept m-2 fw-bold">Civil/Arch Feb-17</div>

                      </div>
                    </div>
              </div>

              <div className="col-md-4 d-flex justify-content-center h-100">
                <div className={`${styles.cb3} ${styles.card1} card m-5  text-center `}>
                    <div className="card-body">
                      <h5 className="card-title mb-4 fw-bolder">Python Programming for Electrical Engineers</h5>
                      <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
                      <div className="card-dept m-2 fw-bold">EEE Feb-17</div>

                    </div>
                  </div>
            </div>
              <div className="col-md-4 d-flex justify-content-center h-100">
                  <div className={`${styles.cb4} ${styles.card1} card m-5  text-center `}>
                      <div className="card-body">
                        <h5 className="card-title mb-4 fw-bolder">Matlab for Engineering Applications</h5>
                        <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
                        <div className="card-dept m-2 fw-bold">EEE Feb-17</div>

                      </div>
                    </div>
              </div>

              <div className="col-md-4 d-flex justify-content-center h-100">
                  <div className={`${styles.cb5} ${styles.card1} card m-5  text-center `}>
                      <div className="card-body">
                        <h5 className="card-title mb-4 fw-bolder">Powering IoT using Arduino</h5>
                        <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
                        <div className="card-dept m-2 fw-bold">ECE/BME Feb-17</div>

                      </div>
                    </div>
              </div>
              <div className="col-md-4 d-flex justify-content-center h-100">
                  <div className={`${styles.cb6} ${styles.card1} card m-5  text-center `}>
                      <div className="card-body">
                        <h5 className="card-title mb-4 fw-bolder">Internet of Things with Raspberry Pi</h5>
                        <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
                        <div className="card-dept m-2 fw-bold">ECE/BME Feb-17</div>

                      </div>
                    </div>
              </div>
              <div className="col-md-4 d-flex justify-content-center h-100">
                <div className={`${styles.cb1} ${styles.card1} card m-5  text-center `}>
                    <div className="card-body">
                      <h5 className="card-title mb-4 fw-bolder">Deep Learning with Python</h5>
                      <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
                      <div className="card-dept m-2 fw-bold">ECE/BME Feb-17</div>

                    </div>
                  </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center h-100">
              <div className={`${styles.cb2} ${styles.card1} card m-5  text-center `}>
                  <div className="card-body">
                    <h5 className="card-title mb-4 fw-bolder">Deep Learning with FPGA</h5>
                    <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
                    <div className="card-dept m-2 fw-bold">ECE/BME Feb-17</div>

                  </div>
                </div>
          </div>



          <div className="col-md-4 d-flex justify-content-center h-100">
            <div className={`${styles.cb3} ${styles.card1} card m-5  text-center `}>
                <div className="card-body">
                  <h5 className="card-title mb-4 fw-bolder">The Future of Front End Development: Building with React</h5>
                  <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
                  <div className="card-dept m-2 fw-bold">CSE/IT/AIDS Feb-17</div>

                </div>
              </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center h-100">
          <div className={`${styles.cb4} ${styles.card1} card m-5  text-center `}>
              <div className="card-body">
                <h5 className="card-title mb-4 fw-bolder">Exploratory Data Analytics and Data Visualization</h5>
                <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
                <div className="card-dept m-2 fw-bold">CSE/IT/AIDS Feb-17</div>

              </div>
            </div>
      </div>

      <div className="col-md-4 d-flex justify-content-center h-100">
        <div className={`${styles.cb5} ${styles.card1} card m-5  text-center `}>
            <div className="card-body">
              <h5 className="card-title mb-4 fw-bolder">Finite Element Analysis Using ANSYS</h5>
              <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
              <div className="card-dept m-2 fw-bold">Mech Feb-17</div>

            </div>
          </div>
    </div>

    <div className="col-md-4 d-flex justify-content-center h-100">
      <div className={`${styles.cb6} ${styles.card1} card m-5  text-center `}>
          <div className="card-body">
            <h5 className="card-title mb-4 fw-bolder">Renewable Energy Technologies</h5>
            <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
            <div className="card-dept m-2 fw-bold">Mech Feb-17</div>

          </div>
        </div>
  </div>


  <div className="col-md-4 d-flex justify-content-center h-100">
    <div className={`${styles.cb1} ${styles.card1} card m-5  text-center `}>
        <div className="card-body">
          <h5 className="card-title mb-4 fw-bolder">Part and assembly modelling using Soildworks</h5>
          <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className= {`${styles.btn1} btn btn-outline-light `}>Explore</a>
          <div className="card-dept m-2 fw-bold">Mech Feb-17</div>

        </div>
      </div>
</div>

<div className="col-md-4 d-flex justify-content-center h-100">
  <div className={`${styles.cb2} ${styles.card1} card m-5  text-center `}>
      <div className="card-body">
        <h5 className="card-title mb-4 fw-bolder">Simulation in multiphysics software -COMSOL</h5>
        <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
        <div className="card-dept m-2 fw-bold">Mech Feb-17</div>

      </div>
    </div>
</div>




<div className="col-md-4 d-flex justify-content-center h-100">
<div className={`${styles.cb3} ${styles.card1} card m-5  text-center `}>
    <div className="card-body">
      <h5 className="card-title mb-4 fw-bolder">Apti-Tracks to Crack Competitive Exams and Placements</h5>
      <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
      <div className="card-dept m-2 fw-bold">Mathematics Feb-17</div>

    </div>
  </div>
</div>

<div className="col-md-4 d-flex justify-content-center h-100">
<div className={`${styles.cb4} ${styles.card1} card m-5  text-center `}>
  <div className="card-body">
    <h5 className="card-title mb-4 fw-bolder">Building Scalable Full stack application using cloud</h5>
    <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
    <div className="card-dept m-2 fw-bold">MCA Feb-17</div>

  </div>
</div>
</div>



<div className="col-md-4 d-flex justify-content-center h-100">
<div className={`${styles.cb5} ${styles.card1} card m-5  text-center `}>
  <div className="card-body">
    <h5 className="card-title mb-4 fw-bolder">Big Data Analytics and visualization tools</h5>
    <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
    <div className="card-dept m-2 fw-bold">MCA Feb-17</div>

  </div>
</div>
</div>


<div className="col-md-4 d-flex justify-content-center h-100">
<div className={`${styles.cb6} ${styles.card1} card m-5  text-center `}>
  <div className="card-body">
    <h5 className="card-title mb-4 fw-bolder">.NET Framework mastery for advanced development excellence</h5>
    <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
    <div className="card-dept m-2 fw-bold">MCA Feb-17</div>

  </div>
</div>
</div>


<div className="col-md-4 d-flex justify-content-center h-100">
<div className={`${styles.cb1} ${styles.card1} card m-5  text-center `}>
  <div className="card-body">
    <h5 className="card-title mb-4 fw-bolder">Cross Platform mobile application development using Thunkable and Flutter</h5>
    <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
    <div className="card-dept m-2 fw-bold">MCA Feb-17</div>

  </div>
</div>
</div>

<div className="col-md-4 d-flex justify-content-center h-100">
<div className={`${styles.cb4} ${styles.card1} card m-5  text-center `}>
  <div className="card-body">
    <h5 className="card-title mb-4 fw-bolder">Hands on Training on 2D Gel Electrophoresis</h5>
    <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
    <div className="card-dept m-2 fw-bold">Bio-Tech Feb-17</div>

  </div>
</div>
</div>




  
  
             </div> 
          </div>



          <div className={activeTab==='civil/arch'? "tab-pane active":"tab-pane" }>
            <div className="row justify-content-center">
              <div className="col-md-4 d-flex justify-content-center ">
                <div className={`${styles.cb1} ${styles.card1} card m-5  text-center `}>
                    <div className="card-body">
                      <h5 className="card-title mb-4">Mastering structural excellence: ETABS workshop for RCC framed structures</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
                      <div className="card-dept m-2 fw-bold">Civil/Arch Feb-17</div>

                    </div>
                  </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
                <div className={`${styles.cb2} ${styles.card1} card m-5  text-center `}>
                    <div className="card-body">
                      <h5 className="card-title mb-4">Analysis of wind force on tall buildings using CFD</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
                      <div className="card-dept m-2 fw-bold">Civil/Arch Feb-17</div>

                    </div>
                  </div>
            </div>


             </div>
          </div>

          <div className={activeTab==='eee'? "tab-pane active":"tab-pane" }>
            <div className="row justify-content-center">
              <div className="col-md-4 d-flex justify-content-center">
                <div className={`${styles.cb3} ${styles.card1} card m-5  text-center `}>
                    <div className="card-body">
                      <h5 className="card-title mb-4 fw-bolder">Python Programming for Electrical Engineers</h5>
                      <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
                      <div className="card-dept m-2 fw-bold">EEE Feb-17</div>

                    </div>
                  </div>
            </div>
              <div className="col-md-4 d-flex justify-content-center">
                  <div className={`${styles.cb4} ${styles.card1} card m-5  text-center `}>
                      <div className="card-body">
                        <h5 className="card-title mb-4 fw-bolder">Matlab for Engineering Applications</h5>
                        <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
                        <div className="card-dept m-2 fw-bold">EEE Feb-17</div>

                      </div>
                    </div>
              </div>


             </div>
          </div>









          <div className={activeTab==='ece'? "tab-pane active":"tab-pane" }>
            <div className="row justify-content-center">
            <div className={`col-md-4 d-flex justify-content-center`}>
    <div className={`${styles.cb5} ${styles.card1} card m-5 text-center`}>
        <div className="card-body">
            <h5 className="card-title mb-4 fw-bolder">Powering IoT using Arduino</h5>
            <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className={`${styles.btn1} btn btn-outline-light`}>Explore</a>
            <div className="card-dept m-2 fw-bold">ECE/BME Feb-17</div>
        </div>
    </div>
</div>

<div className={`col-md-4 d-flex justify-content-center`}>
    <div className={`${styles.cb6} ${styles.card1} card m-5 text-center`}>
        <div className="card-body">
            <h5 className="card-title mb-4 fw-bolder">Internet of Things using Arduino</h5>
            <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className={`${styles.btn1} btn btn-outline-light`}>Explore</a>
            <div className="card-dept m-2 fw-bold">ECE/BME Feb-17</div>
        </div>
    </div>
</div>

<div className={`col-md-4 d-flex justify-content-center`}>
    <div className={`${styles.cb1} ${styles.card1} card m-5 text-center`}>
        <div className="card-body">
            <h5 className="card-title mb-4 fw-bolder">Deep Learning using python</h5>
            <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className={`${styles.btn1} btn btn-outline-light`}>Explore</a>
            <div className="card-dept m-2 fw-bold">ECE/BME Feb-17</div>
        </div>
    </div>
</div>

<div className={`col-md-4 d-flex justify-content-center`}>
    <div className={`${styles.cb2} ${styles.card1} card m-5 text-center`}>
        <div className="card-body">
            <h5 className="card-title mb-4 fw-bolder">Deep Learning using FPGA</h5>
            <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className={`${styles.btn1} btn btn-outline-light`}>Explore</a>
            <div className="card-dept m-2 fw-bold">ECE/BME Feb-17</div>
        </div>
    </div>
</div>



             </div>
          </div>












          <div className={activeTab==='cse'? "tab-pane active":"tab-pane" }>
            <div className="row justify-content-center">
            <div className={`col-md-4 d-flex justify-content-center`}>
    <div className={`${styles.cb3} ${styles.card1} card m-5 text-center`}>
        <div className="card-body">
            <h5 className="card-title mb-4 fw-bolder">Exploratory Data Analytics and Data Visualization</h5>
            <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className={`${styles.btn1} btn btn-outline-light`}>Explore</a>
            <div className="card-dept m-2 fw-bold">ECE/BME Feb-17</div>
        </div>
    </div>
</div>
            <div className={`col-md-4 d-flex justify-content-center`}>
    <div className={`${styles.cb4} ${styles.card1} card m-5 text-center`}>
        <div className="card-body">
            <h5 className="card-title mb-4 fw-bolder">Exploratory Data Analytics and Data Visualization</h5>
            <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className={`${styles.btn1} btn btn-outline-light`}>Explore</a>
            <div className="card-dept m-2 fw-bold">ECE/BME Feb-17</div>
        </div>
    </div>
</div>


             </div>
          </div>




          <div className={activeTab==='mech'? "tab-pane active":"tab-pane" }>
            <div className="row justify-content-center">
              <div className="col-md-4 d-flex justify-content-center">
                <div className={`${styles.cb5} ${styles.card1} card m-5  text-center `}>
                    <div className="card-body">
                      <h5 className="card-title mb-4 fw-bolder">Finite Element Analysis Using ANSYS</h5>
                      <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
                      <div className="card-dept m-2 fw-bold">Mech Feb-17</div>
    
                    </div>
                  </div>
            </div>
    
            <div className="col-md-4 d-flex justify-content-center">
              <div className={`${styles.cb6} ${styles.card1} card m-5  text-center `}>
                  <div className="card-body">
                    <h5 className="card-title mb-4 fw-bolder">Renewable Energy Technologies</h5>
                    <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
                    <div className="card-dept m-2 fw-bold">Mech Feb-17</div>
    
                  </div>
                </div>
          </div>
    
    
          <div className="col-md-4 d-flex justify-content-center">
            <div className={`${styles.cb1} ${styles.card1} card m-5  text-center `}>
                <div className="card-body">
                  <h5 className="card-title mb-4 fw-bolder">Part and assembly modelling using Soildworks</h5>
                  <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
                  <div className="card-dept m-2 fw-bold">Mech Feb-17</div>
    
                </div>
              </div>
        </div>
    
        <div className="col-md-4 d-flex justify-content-center">
          <div className={`${styles.cb2} ${styles.card1} card m-5  text-center `}>
              <div className="card-body">
                <h5 className="card-title mb-4 fw-bolder">Simulation in multiphysics software -COMSOL</h5>
                <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
                <div className="card-dept m-2 fw-bold">Mech Feb-17</div>
    
              </div>
            </div>
      </div>


             </div>
          </div>



          <div className={activeTab==='biotech'? "tab-pane active":"tab-pane" }>
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center">
                <div className={`${styles.cb4} ${styles.card1} card m-5  text-center `}>
                    <div className="card-body">
                      <h5 className="card-title mb-4 fw-bolder">Hands on Training on 2D Gel Electrophoresis</h5>
                      <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
                      <div className="card-dept m-2 fw-bold">Bio-Tech Feb-17</div>
              
                    </div>
                  </div>
              </div>


             </div>
          </div>


          <div className={activeTab==='mathematics'? "tab-pane active":"tab-pane" }>
            <div className="row justify-content-center">
              <div className="col-md-14 d-flex justify-content-center">
                <div className={`${styles.cb3} ${styles.card1} card m-5  text-center `}>
                    <div className="card-body">
                      <h5 className="card-title mb-4 fw-bolder">Apti-Tracks to Crack Competitive Exams and Placements</h5>
                      <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
                      <div className="card-dept m-2 fw-bold">Mathematics Feb-17</div>
            
                    </div>
                  </div>
            </div>


             </div>
          </div>

          <div className={activeTab==='mca'? "tab-pane active":"tab-pane" }>
            <div className="row justify-content-center">
              <div className="col-md-4 d-flex  justify-content-center">
                <div className={`${styles.cb4} ${styles.card1} card m-5   text-center `}>
                    <div className="card-body">
                      <h5 className="card-title mb-4 fw-bolder">Building Scalable Full stack application using cloud</h5>
                      <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
                      <div className="card-dept m-2 fw-bold">MCA Feb-17</div>
              
                    </div>
                  </div>
              </div>
              
              
              
              <div className="col-md-4 d-flex justify-content-center">
                <div className={`${styles.cb5} ${styles.card1} card m-5  text-center `}>
                    <div className="card-body">
                      <h5 className="card-title mb-4 fw-bolder">Big Data Analytics and visualization tools</h5>
                      <p className="card-text fw-light" style={{ color: '#fff' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
                      <div className="card-dept m-2 fw-bold">MCA Feb-17</div>
              
                    </div>
                  </div>
              </div>
              
              
              <div className="col-md-4 d-flex justify-content-center">
                <div className={`${styles.cb6} ${styles.card1} card m-5  text-center `}>
                    <div className="card-body">
                      <h5 className="card-title mb-4 fw-bolder">.NET Framework mastery for advanced development excellence</h5>
                      <p className="card-text fw-light" style={{ color: '#fff' }}
>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
                      <div className="card-dept m-2 fw-bold">MCA Feb-17</div>
              
                    </div>
                  </div>
              </div>
              
              
              <div className="col-md-4 d-flex justify-content-center">
                <div className={`${styles.cb1} ${styles.card1} card m-5  text-center `}>
                    <div className="card-body">
                      <h5 className="card-title mb-4 fw-bolder">Cross Platform mobile application development using Thunkable and Flutter</h5>
                      <p className="card-text fw-light" style={{ color: '#fff' }}
>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className={`${styles.btn1} btn btn-outline-light `}>Explore</a>
                      <div className="card-dept m-2 fw-bold">MCA Feb-17</div>
              
                    </div>
                  </div>
              </div>


             </div>
          </div>









        </div>



    </div>








       


      

    </div>
  </section>
  </body>
  )
}

export default Workshop
