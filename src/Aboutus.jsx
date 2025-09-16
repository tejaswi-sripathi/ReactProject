import React from "react";
import "./aboutus.css";
import { useNavigate } from "react-router-dom";

export default function Aboutus() {

  const navigate = useNavigate();
  const goToContact = () => {
    navigate("/contactus");
  };
  return (
    <>
    <div className="containeraboutus">

      {/* Hero Section */}
      <div className="aboutus-hero text-center text-dark py-5 mb-4 container-fluid-back">
        <h1 className="display-4 text-gradient fw-bold">About Us</h1>
        <p className="lead">Freshness Delivered. Quality You Can Trust.</p>
      </div>

      {/* About Me Section (After Hero) */}
      <div className=" container-fluid-back about-me py-5">
        <div className="row align-items-center">
          <div className="col-md-4 mb-4">
            <img
              src="/images/owner.jpg" 
              alt="Owner"
              className="img-fluid rounded-circle shadow-lg"
            />
          </div>
          <div className="col-md-8">
            <h2 className="fw-bold text-gradient mb-3">About Me</h2>
            <p className="mysection">
              Hello! I am <strong>Teju</strong>, the founder of this website. My passion is 
              to connect people with fresh, healthy, and high-quality groceries 
              directly from trusted farmers. I started this journey with a vision 
              to make organic and farm-fresh products accessible to everyone.
            </p>
            <p className="mysection">
              Over the years, we’ve built strong relationships with suppliers, 
              ensuring that every product you receive is packed with care, flavor, 
              and freshness.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="">
      <div className=" py-5 mb-4">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <img
              src="/carouselimages/Vegetables-.jpg"
              alt="Our Story"
              className="img-fluid rounded shadow-lg"
            />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold text-gradient  mb-3">Our Story</h2>
            <p className="storysection">
              We started with a simple vision: <strong>to bring farm-fresh,
              organic, and high-quality groceries</strong> directly to your
              doorstep. Our team works hand-in-hand with local farmers and
              trusted suppliers to ensure that every item you receive is packed
              with freshness, flavor, and care.
            </p>
          </div>
        </div>
      </div>
      </div>

      {/* Mission & Values */}
      <div className="aboutus-section text-center py-5 mb-5">
          <h2 className="fw-bold  text-gradient mb-4">Our Mission & Values</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="aboutus-card shadow p-4 h-100">
                <h4>🌱 Freshness</h4>
                <p>Hand-picked ingredients to ensure maximum freshness and nutrition.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="aboutus-card shadow p-4 h-100">
                <h4>🤝 Trust</h4>
                <p>We believe in transparency, honesty, and building long-term relationships with our customers.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="aboutus-card shadow p-4 h-100">
                <h4>🚚 Convenience</h4>
                <p>Fast delivery right to your doorstep for a hassle-free shopping experience.</p>
              </div>
            </div>
          </div>
        </div>

      {/* Services / Offerings */}
      <div className="aboutus-section py-5 mb-5">
        <div className="text-center">
          <h2 className="fw-bold text-gradient mb-4">What We Offer</h2>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="aboutus-card p-4 shadow h-100">
                <h5>🥦 Fresh Vegetables</h5>
                <p>Farm-fresh vegetables delivered daily.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="aboutus-card p-4 shadow h-100">
                <h5>🍎 Fruits</h5>
                <p>Seasonal and organic fruits from trusted suppliers.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="aboutus-card p-4 shadow h-100">
                <h5>🧂 Groceries</h5>
                <p>High-quality essential groceries for your daily needs.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="aboutus-card p-4 shadow h-100">
                <h5>🌿 Organic Products</h5>
                <p>Certified organic products to keep you healthy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements / Stats */}
      <div className="aboutus-section py-5 text-center">
          <h2 className="fw-bold text-gradient mb-4">Our Achievements</h2>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="aboutus-card p-4 shadow h-100">
                <h3>500+</h3>
                <p>Happy Customers</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="aboutus-card p-4 shadow h-100">
                <h3>50+</h3>
                <p>Trusted Suppliers</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="aboutus-card p-4 shadow h-100">
                <h3>10+</h3>
                <p>Years of Experience</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="aboutus-card p-4 shadow h-100">
                <h3>1000+</h3>
                <p>Deliveries Completed</p>
              </div>
            </div>
          </div>
        </div>

      {/* Call to Action */}
      <div className="aboutus-cta text-center text-dark py-4">
        <h2 className="fw-bold">Join Our Fresh Journey Today!</h2>
        <p className="mb-4">Experience the difference of quality groceries delivered with care.</p>
       <a
  onClick={(e) => { 
    e.preventDefault(); // prevent browser reload
    goToContact();
  }}
  className="btn btn-primary btn-lg rounded-pill  shadow"
>
  Contact Us
</a>

      </div>

    </div>
    </>
  );
}


























