import React from "react";

const Testimonial = () => {
  return (
    <div class="vg-page page-testimonial">
      <div class="container">
        <h1 class="text-center fw-normal wow fadeInUp" data-aos="fade-up">
          What Clients are Saying
        </h1>
        <div
          class="row justify-content-center mt-5 wow fadeInUp"
          data-aos="fade-up"
        >
          <div class="col-md-9">
            <div class="owl-carousel testi-carousel">
              <div class="item">
                <div class="row">
                  <div class="col-md-6">
                    <div class="img-place">
                      <img src="img/testimonials/testimonials_1.jpg" alt="" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="caption">
                      <div class="testi-content">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered
                      </div>
                      <div class="testi-info">
                        <div class="thumb-profile">
                          <img
                            src="img/testimonials/testimonials_1.jpg"
                            alt=""
                          />
                        </div>
                        <div class="tagline">
                          <h5 class="mb-0">Satria Nugraha</h5>
                          <span class="text-muted">CEO Nutshell</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="row">
                  <div class="col-md-6">
                    <div class="img-place">
                      <img src="img/testimonials/testimonials_2.jpg" alt="" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="caption">
                      <div class="testi-content">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Saepe natus expedita ab facilis ut, animi
                        explicabo amet. Voluptatibus possimus iste enim,
                        doloremque, fugiat accusamus nisi optio fugit ratione
                        expedita harum?
                      </div>
                      <div class="testi-info">
                        <div class="thumb-profile">
                          <img
                            src="img/testimonials/testimonials_2.jpg"
                            alt=""
                          />
                        </div>
                        <div class="tagline">
                          <h5 class="mb-0">Selena Arrini</h5>
                          <span class="text-muted">CEO BigTree</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
