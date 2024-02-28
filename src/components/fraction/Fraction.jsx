import React from "react";

const Fraction = () => {
  return (
    <div
      class="vg-page page-funfact"
      style={{ backgroundImage: `url(img/bg_banner.jpg)` }}
    >
      <div class="container">
        <div class="row section-counter">
          <div class="col-md-6 col-lg-3 py-4 wow fadeIn">
            <h1 class="number" data-number="768">
              768
            </h1>
            <span>Clients</span>
          </div>
          <div class="col-md-6 col-lg-3 py-4 wow fadeIn">
            <h1 class="number" data-number="230">
              230
            </h1>
            <span>Project Compleate</span>
          </div>
          <div class="col-md-6 col-lg-3 py-4 wow fadeIn">
            <h1 class="number" data-number="97">
              97
            </h1>
            <span>Project Ongoing</span>
          </div>
          <div class="col-md-6 col-lg-3 py-4 wow fadeIn">
            <h1 class="number" data-number="699">
              699
            </h1>
            <span>Client Satisfaction</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fraction;
