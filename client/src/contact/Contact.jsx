import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section id="contact" class="contacts">
      <h2 class="section-title">Get In Touch</h2>
      <div class="section-divider"></div>
      <div class="contact-content">
        <div class="contact-info">
          <h3>Let's Plan Your Dream Trip</h3>
          <p>
            Ready to start your next adventure? Contact us today and let our
            travel experts help you create the perfect itinerary.
          </p>
          <div class="contact-details">
            <div class="contact-item">
              <i><FontAwesomeIcon icon={faPhone} /></i>
              <div>
                <h4>Phone</h4>
                <p>+40 630057047</p>
              </div>
            </div>
            <div class="contact-item">
              <i><FontAwesomeIcon icon={faEnvelope} /></i>
              <div>
                <h4>Email</h4>
                <p>info@seetheworld.com</p>
              </div>
            </div>
            <div class="contact-item">
              <i><FontAwesomeIcon icon={faMapMarkerAlt} /></i>
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
              <select id="problem" name="problem">
                <option value="" selected disabled hidden>Select a reason</option>
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
                placeholder="Tell us about your dream trip"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" class="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
