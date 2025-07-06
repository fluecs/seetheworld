import {React, useState, useEffect} from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faBuilding,
  faArrowRight,
  faFire
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function AllDest() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/list")
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch places", err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="destinations" className="popular">
      <h1 className="section-title">All Tourist Destinations</h1>
      <div className="section-divider"></div>
      <h1>Kolio sloji si tuka search i filter glupostite</h1>
      <div className="section-divider"></div>
      <div className="locations">
        {places.map((place, idx) => (
          <Link
            className="place"
            to={`/view?id=${place.id}`}
            key={place.id || idx}
          >
            <div>
              <div className="place-top">
                <img src={place.imageURL} alt={place.title} />
              </div>
              <p className="title">{place.title}</p>
              <p className="desc">{place.description}</p>
			  {place.top ? <span class="rating"><FontAwesomeIcon icon={faFire} /><p> Popular</p></span> : ""}
              <span className="price">
                From €{place.pricePerPerson}
                <span className="higher">99</span>
              </span>
              <span className="info">
                <FontAwesomeIcon icon={faCalendar} /> {place.days} days ⋅{" "}
                <FontAwesomeIcon icon={faBuilding} /> {place.location}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
