import React from "react";
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  return (
    <section id="home" className="hero">
	  <div class="glass-blur"></div>
      <div className="hero-content">
        <h1>Discover Your Next Adventure</h1>
        <div className="hero-goals">
          <p><bold>See The World</bold> makes it easy to discover and book unique places to stay, exciting activities, and local experiences all in one place. Whether you're planning a weekend getaway or a dream trip, we connect you with trusted providers to create a smooth, personalized travel experience. Let us help you travel better, smarter, and with confidence.</p>
        </div>
        <form id="searchForm" className="hero-search-bar">
          <input
            type="text"
            id="searchInput"
            name="search" 
            placeholder="Book a place"
            required
          />
          <button type="submit" className="search-btn">
            {/* Placeholder for search icon */}
            <span role="img" aria-label="search"><FontAwesomeIcon icon={faArrowRight} /></span>
          </button>
        </form>
      </div>
      <div className="hero-image">
        <div className="floating-card">
          <span className="card-icon" role="img" aria-label="plane">✈️</span>
          <div className="card-content">
            <div className="card-title">500+ Destinations</div>
            <div className="card-desc">Worldwide coverage with trusted partners for every journey</div>
          </div>
        </div>
      </div>
    </section>
  );
} 