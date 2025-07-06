import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section id="contact" class="contacts">
      <h2 class="section-title">Get In Touch</h2>
      <div class="section-divider"></div>
      <div class="contact-content">
        <div class="contact-info">
          <h3>Connect to our staff</h3>
          <p>
            Need help with the site or have a question about your booking? Our team is here to assist you! Whether you need support with a booking issue, payment problem, or just want to share your travel dreams, we're just a message away.
          </p>
          <div class="contact-details">
            <div class="contact-item">
              <i>
                <FontAwesomeIcon icon={faPhone} />
              </i>
              <div>
                <h4>Phone</h4>
                <p>+40 630057047</p>
              </div>
            </div>
            <div class="contact-item">
              <i>
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              <div>
                <h4>Email</h4>
                <p>info@seetheworld.com</p>
              </div>
            </div>
            <div class="contact-item">
              <i>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </i>
              <div>
                <h4>Address</h4>
                <p>Calea Circumvalațiunii 1, Timișoara 300013, Romania</p>
              </div>
            </div>
          </div>
        </div>
        <div class="contact-form">
          <form id="contactForm">
            <div class="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div class="form-group">
              <select id="problem" name="problem" required>
                <option value="" selected disabled hidden>
                  Select a reason
                </option>
                <option value="booking">Booking Issue</option>
                <option value="payment">Payment Problem</option>
                <option value="cancellation">Cancellation/Refund</option>
                <option value="website">Website Bug or Error</option>
                <option value="suggestion">Suggestion/Improvement</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="In detail, describe your issue or question"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" class="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div class="section-divider"></div>
      <div class="see-more-holder">
        <a class="see-more" href="/team">
          Meet the Team&nbsp;&nbsp;
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </section>
  );
}
