import React from "react";
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faBuilding, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export default function Popular() {
	return (
		<section id="destinations" className="popular">
			<h1 className="section-title">Popular Destinations</h1>
			<div className="section-divider"></div>
			<div className="locations">
				<Link className="place" to="view?test">
					<div>
						<div className="place-top"><img src="https://live.staticflickr.com/1589/24462693695_f45c0b45f7_h.jpg" /></div>
						<p className="title">Santorini, Greece</p>
						<p className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
							Ipsum
							has been the industry's standard dummy text ever since the 1500s, when an unknown printer
							took a
							galley of type and scrambled it to make a type specimen book. It has survived not only five
							centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
							It
							was
							popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
							passages,
							and
							more recently with desktop publishing software like Aldus PageMaker including versions of
							Lorem
							Ipsum.</p>
						<span className="price">From €799<span className="higher">99</span></span>
						<span className="info"><FontAwesomeIcon icon={faCalendar} /> 6 days ⋅ 
								<FontAwesomeIcon icon={faBuilding} /> Kalamani Salami</span>
					</div>
				</Link>
				<Link className="place" to="view?test">
					<div>
						<div className="place-top"><img src="https://live.staticflickr.com/1589/24462693695_f45c0b45f7_h.jpg" /></div>
						<p className="title">Santorini, Greece</p>
						<p className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
							Ipsum
							has been the industry's standard dummy text ever since the 1500s, when an unknown printer
							took a
							galley of type and scrambled it to make a type specimen book. It has survived not only five
							centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
							It
							was
							popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
							passages,
							and
							more recently with desktop publishing software like Aldus PageMaker including versions of
							Lorem
							Ipsum.</p>
						<span className="price">From €799<span className="higher">99</span></span>
						<span className="info"><FontAwesomeIcon icon={faCalendar} /> 6 days ⋅ 
								<FontAwesomeIcon icon={faBuilding} /> Kalamani Salami</span>
					</div>
				</Link>
				<Link className="place" to="view?test">
					<div>
						<div className="place-top"><img src="https://live.staticflickr.com/1589/24462693695_f45c0b45f7_h.jpg" /></div>
						<p className="title">Santorini, Greece</p>
						<p className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
							Ipsum
							has been the industry's standard dummy text ever since the 1500s, when an unknown printer
							took a
							galley of type and scrambled it to make a type specimen book. It has survived not only five
							centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
							It
							was
							popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
							passages,
							and
							more recently with desktop publishing software like Aldus PageMaker including versions of
							Lorem
							Ipsum.</p>
						<span className="price">From €799<span className="higher">99</span></span>
						<span className="info"><FontAwesomeIcon icon={faCalendar} /> 6 days ⋅ 
								<FontAwesomeIcon icon={faBuilding} /> Kalamani Salami</span>
					</div>
				</Link>
			</div>
			<div className="section-divider"></div>
			<div className="see-more-holder">
				<Link className="see-more" to="/locations">See More Locations&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight}/></Link>
			</div>
		</section>
	)
}