import React from "react";
import "../App.css";

export default function Activities() {
	return (
		<section id="activities" class="activities">
			<h1 class="section-title">Activities</h1>
			<div class="section-divider"></div>
			<div class="locations">
				<a class="place" href="view?test">
					<div>
						<div class="place-top"><img src="https://live.staticflickr.com/1589/24462693695_f45c0b45f7_h.jpg" /></div>
						<p class="title">Santorini, Greece</p>
						<p class="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
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
						<span class="price">From €799<span class="higher">99</span></span>
						<span class="info"><i class="fa-solid fa-calendar"></i> 6 days ⋅ <i
								class="fa-solid fa-building"></i> Kalamani Salami</span>
					</div>
				</a>
			</div>
			<div class="section-divider"></div>
			<div class="see-more-holder">
				<a class="see-more" href="/locations">See More Locations</a>
			</div>
		</section>
	)
}