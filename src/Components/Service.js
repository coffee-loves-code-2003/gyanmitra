import React from 'react';
import mepco from '../Images/Mepco_Schlenk_Engineering_College_logo.png'
import img1 from '../Images/Gyanmitra_24__1_-removebg-preview.png'
import img2 from '../Images/vecteezy_adoption-and-community-care-logo-template-vector_11139584-removebg-preview.png'
import img3 from '../Images/portrait-young-african-american-man-with-vr-glasses.jpg'
import img4 from '../Images/pexels-karolina-grabowska-4491459.jpg'
import { useNavigate } from 'react-router-dom';
function Service() {
    const navigate=useNavigate();
  return (
    <section id="Home">
      <div className="parallex-header">
        <div className="container">
          <div className="header-content">
            <img src={mepco} width="20%" className="d-block mx-auto" />
            <h1 className="text-center fw-bold" style={{ fontFamily: 'Poppins', color: '#fff' }}>
              Mepco Schlenk Engineering College
            </h1>

            <h1 className="text-center fw-bold" style={{ fontFamily: 'Poppins', color: '#fff' }}>
              Presents
            </h1>

            <img src={img1} width="25%" className="d-block mx-auto" />
          </div>
        </div>
        <div className="container">
          <div className="content row">
            <div className="col-md-6 left">
              <h1 className="primary-color">About Gyanmitra'24</h1>
              <p className="text-justify">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptatem excepturi! Dolore cupiditate ea eos aut, beatae ipsa repellendus natus, veritatis quisquam, nobis quam quos saepe! Doloribus fugit eum maiores?              </p>
            </div>
            <div className="col-md-6 right">
              <img src={img2} className="w-100" />
            </div>
            <div className="col-12 bottom"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container1">
          <div className="row m-5">
            <div className="col-md-6 left">
              <h1 style={{ fontFamily: 'Poppins' }}>Technical Events</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nostrum expedita, corporis ullam hic nihil voluptatem odio perferendis, illum voluptas reiciendis eum. In, soluta totam laborum suscipit rem nisi vitae.
              </p>
              <button className="btn" id="Explore">
                View All
              </button>
            </div>
            <div className="col-md-6 right">
              <img src={img3} className="w-100" />
            </div>
          </div>

          <div className="row m-5">
            <div className="col-md-6 left">
              <img src={img4} className="w-100" />
            </div>
            <div className="col-md-6 right">
              <h1 style={{ fontFamily: 'Poppins' }}>Workshop</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nostrum expedita, corporis ullam hic nihil voluptatem odio perferendis, illum voluptas reiciendis eum. In, soluta totam laborum suscipit rem nisi vitae.
              </p>
              <button className="btn m-4" id="Explore" onclick={()=>navigate('/workshop')}>
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
