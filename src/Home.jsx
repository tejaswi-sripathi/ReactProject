import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./home.css";

export default function Home() {
  const navigate = useNavigate();

  const sections = [
    { title: "Fresh Vegetables", desc: "Organic and farm-fresh vegetables delivered to your doorstep.", img: "/carouselimages/Vegetables-.jpg", link: "/veg" },
    { title: "Dairy Products", desc: "Milk, cheese, butter, and more directly from local farms.", img: "/carouselimages/dairyproducts.jpg", link: "/dairyproducts" },
    { title: "Dry Fruits", desc: "Premium quality almonds, cashews, raisins, and more.", img: "/carouselimages/dryfruits.webp", link: "/nutsandseeds" },
    { title: "Fruits", desc: "Seasonal and exotic fruits hand-picked for you.", img: "/carouselimages/fruits.jpg", link: "/fruits" },
    { title: "Seafood", desc: "Fresh fish, prawns, and other seafood delivered hygienically.", img: "/carouselimages/seafood.jpg", link: "/meatandseafood" },
    { title: "Meat", desc: "Tender and fresh chicken, mutton, and more.", img: "/carouselimages/meat.png", link: "/meatandseafood" },
    { title: "Seeds", desc: "Nutritious chia seeds, flax seeds, sunflower seeds & more.", img: "/carouselimages/seeds.webp", link: "/nutsandseeds" },
  ];

  const recentItems = [
    { name: "Eggplant", img: "https://www.halfyourplate.ca/wp-content/uploads/2014/12/isolated-eggplants.jpg" },
    { name: "Mangoes", img: "https://img.freepik.com/free-photo/mango-still-life_23-2151542114.jpg?w=360" },
    { name: "Cheese", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlJI60bWcIIItDpNXbfU-eAACrZyBJ-FXSJKueGZdjCyG5DoSROzFhgMOzOoMRb-GRDGA&usqp=CAU"},
    { name: "Cashews", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzdmwtoHU_7MJUIysQI54_EmcB2Jrza6mp-w&s" },
    { name: "Chicken", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTowOvVvjdbQx8YiP4QVu0bXUibkNFcXwjhpw&s" },
  ];

  const reviews = [
    { name: "Ravi Kumar", feedback: "Amazing fresh vegetables! The quality is top-notch and delivery was super fast.", stars: 5 },
    { name: "Sita Reddy", feedback: "I love their dairy products. Pure, fresh, and organic. Highly recommend!", stars: 4 },
    { name: "Anil Sharma", feedback: "The meat and seafood are really fresh. Perfect for our family meals.", stars: 5 },
  ];

  const renderStars = (count) => {
    let stars = [];
    for (let i = 0; i < count; i++) stars.push(<span key={i} className="star">&#9733;</span>);
    for (let i = count; i < 5; i++) stars.push(<span key={i} className="star empty">&#9734;</span>);
    return stars;
  };

  return (
    <div className="container-fluid p-0">

      {/* Video Banner */}
      <div className="video-container">
        <video className="video-banner" src="/Images/videocariusel.mp4" autoPlay loop muted playsInline></video>
        <div className="video-overlay">
          <h1 className="video-title">Farm To Home</h1>
          <p className="video-subtitle">Fresh • Organic • Healthy</p>
        </div>
      </div>

      {/* Sections Cards */}
      <div className="bacgroundapply my-5">
        <h2 className="gradient-heading text-center mb-5 p-3">Our Categories</h2>
        <div className="row g-4">
          {sections.map((sec, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
              <div
                className="full-image-card shadow-lg"
                style={{ backgroundImage: `url(${sec.img})` }}
              >
                <div className="card-overlay">
                  <h5 className="card-title">{sec.title}</h5>
                  <p className="card-desc">{sec.desc}</p>
                  <button
                    className="btn btn-success rounded-pill px-4"
                    onClick={() => navigate(sec.link)}
                  >
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Recent Items Carousel */}
      <div className="recent-carousel-section my-5">
        <h3 className="text-center mb-4">Recent Items</h3>
        <div id="recentCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
          <div className="carousel-inner text-center">
            {recentItems.map((item, index) => (
              <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                <img
                  src={item.img}
                  alt={item.name}
                  className="rounded-circle recent-img"
                />
                <h6 className="mt-2">{item.name}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Review Carousel */}
      <div className="my-4 review-section" style={{ backgroundColor: "pink" }}>
        <h3 className="review-heading text-center text-gradient mb-4">Customer Reviews</h3>
        <div id="reviewCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner text-center">
            {reviews.map((rev, index) => (
              <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                <h5 className="mb-2">{rev.name}</h5>
                <div className="mb-2">{renderStars(rev.stars)}</div>
                <p>{rev.feedback}</p>
              </div>
            ))}
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#reviewCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#reviewCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* ✅ Footer */}
      <footer className="site-footer text-white">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h5>Farm To Home</h5>
              <p>Delivering fresh, organic and healthy products directly from farms to your home.</p>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/" className="footer-link">Home</a></li>
                <li><a href="/aboutus" className="footer-link">About Us</a></li>
                <li><a href="/contactus" className="footer-link">Contact</a></li>
                <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Contact</h5>
              <p>Email: support@farmtohome.com</p>
              <p>Phone: +91 7032129199</p>
              <p>Location: Hyderabad, India</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center py-3">
          © {new Date().getFullYear()} Farm To Home | All Rights Reserved
        </div>
      </footer>

    </div>
  );
}
