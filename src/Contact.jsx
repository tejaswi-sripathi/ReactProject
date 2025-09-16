import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-page">

      {/* Main Title */}
      <div className="text-center mb-5">
        <h1 className="contact-main-title">Contact Us</h1>
        <p className="contact-subtitle">We’re here to help! Reach out through form, map or reach us by phone.</p>
      </div>

      {/* Contact Form & Map */}
      <div className="py-5 mb-5">
        <div className="row">
          {/* Left Column - Form */}
          <div className="col-6 mb-5">
            <div className="contact-card p-4 rounded shadow-lg">
              <h3 className="mb-3">Send us a message</h3>
              <form>
                <input type="text" className="form-control input-field mb-3" placeholder="Your Name" required />
                <input type="email" className="form-control input-field mb-3" placeholder="Your Email" required />
                <textarea className="form-control input-field mb-3" rows="5" placeholder="Your Message" required></textarea>
                <button type="submit" className="btn submit-btn w-100">Send Message</button>
              </form>

              <div className="contact-info mt-5">
                <div className="info-item mb-2"><FaPhoneAlt className="info-icon" /> +91 7032129199</div>
                <div className="info-item mb-2"><FaEnvelope className="info-icon" /> support@example.com</div>
                <div className="info-item mb-2"><FaMapMarkerAlt className="info-icon" /> Hyderabad, India</div>
              </div>

              <div className="social-icons mt-3">
                <a href="#" className="social-icon"><FaFacebookF /></a>
                <a href="#" className="social-icon"><FaTwitter /></a>
                <a href="#" className="social-icon"><FaInstagram /></a>
              </div>
            </div>
          </div>

          {/* Right Column - Map & Info */}
          <div className="col-md-6 mb-5">
            <div className="contact-card p-4 rounded shadow-lg h-100">
              <h3 className="mb-3">Our Location</h3>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.523830299224!2d78.473183!3d17.385044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91e9f6f6e0e3%3A0x2f6f2aabf7a5b50!2sHyderabad!5e0!3m2!1sen!2sin!4v1592332389162!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>

              <div className="working-hours mt-5">
                <h5>Working Hours</h5>
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p>Sat: 10:00 AM - 4:00 PM</p>
                <p>Sun: Closed</p>
              </div>

              <div className="newsletter mt-5">
                <h5>Subscribe to our newsletter</h5>
                <div className="d-flex gap-2">
                  <input type="email" className="form-control input-field" placeholder="Your Email" />
                  <button className="btn submit-btn">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-5 text-center mb-5">
        <h2 className="mb-4">What Our Clients Say</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-5 testimonial-card p-4 rounded shadow">
            <p>"Excellent support and very responsive team!"</p>
            <h6>- Rajesh K.</h6>
          </div>
          <div className="col-md-4 mb-5 testimonial-card p-4 rounded shadow">
            <p>"Fast response and clear guidance. Highly recommend."</p>
            <h6>- Sneha P.</h6>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className=" py-5 text-center mb-5">
        <h2 className="mb-4">Frequently Asked Questions</h2>
        <div className="faq-item mb-3">
          <h5>Q: How long does it take to get a response?</h5>
          <p>A: Usually within 24 hours on business days.</p>
        </div>
        <div className="faq-item mb-3">
          <h5>Q: Can I schedule an appointment?</h5>
          <p>A: Yes! Please contact us through the form or call us.</p>
        </div>
      </div>

      {/* Call to Action Banner */}
      <div className="cta-banner text-center py-5">
        <h3>Need immediate assistance?</h3>
        <p>Call us now and our team will help you right away!</p>
        <a href="tel:+917032129199" className="btn submit-btn">Call Now</a>
      </div>

    </div>
  );
}

export default Contact;   