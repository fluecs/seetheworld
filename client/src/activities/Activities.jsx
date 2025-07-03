import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faBuilding,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Activities() {
  return (
    <section id="activities" class="activities darker">
      <h1 class="section-title">Activities</h1>
      <div class="section-divider"></div>
      <div class="locations">
        <a class="place place-large" href="view?test">
          <div>
            <div class="place-full">
              <img src="/running.png" />
            </div>
            <div class="place-cover"></div>
            <p class="title2">Running & Jogging</p>
          </div>
        </a>
        <a class="place place-large" href="view?test">
          <div>
            <div class="place-full">
              <img src="/running.png" />
            </div>
            <div class="place-cover"></div>
            <p class="title2">Running & Jogging</p>
          </div>
        </a>
        <a class="place place-large" href="view?test">
          <div>
            <div class="place-full">
              <img src="/running.png" />
            </div>
            <div class="place-cover"></div>
            <p class="title2">Running & Jogging</p>
          </div>
        </a>
        <a class="place place-large" href="view?test">
          <div>
            <div class="place-full">
              <img src="/running.png" />
            </div>
            <div class="place-cover"></div>
            <p class="title2">Running & Jogging</p>
          </div>
        </a>
      </div>
      <div class="section-divider"></div>
      <div class="see-more-holder">
        <a class="see-more" href="/locations">
          See More Locations&nbsp;&nbsp;
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </section>
  );
}
