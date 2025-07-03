import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faBuilding,
  faArrowRight,
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
              <i class="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div class="contact-item">
              <i class="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>info@seetheworld.com</p>
              </div>
            </div>
            <div class="contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <div>
                <h4>Address</h4>
                <p>123 Travel Street, Adventure City, AC 12345</p>
              </div>
            </div>
            <div class="contact-item meet-team-item">
              <i class="fas fa-user"></i>
              <div>
                <a href="about.html" class="meet-team-link">
                  Meet the team
                </a>
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
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone"
              />
            </div>
            <div class="form-group">
              <select id="problem" name="problem">
                <option value="">Select a problem</option>
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
