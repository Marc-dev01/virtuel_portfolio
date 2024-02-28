import React from "react";

const Footer = () => {
  return (
    <div class="vg-footer">
      <h1 class="text-center">Virtual Folio</h1>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 py-3">
            <div class="footer-info">
              <p>Where to find me</p>
              <hr class="divider" />
              <p class="fs-large fg-white">
                1600 Amphitheatre Parkway Mountain View, California 94043 US
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 py-3">
            <div class="float-lg-right">
              <p>Follow me</p>
              <hr class="divider" />
              <ul class="list-unstyled">
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Youtube</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 py-3">
            <div class="float-lg-right">
              <p>Contact me</p>
              <hr class="divider" />
              <ul class="list-unstyled">
                <li>info@virtual.com</li>
                <li>+8890234</li>
                <li>+813023</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-3">
          <div class="col-12 mb-3">
            <h3 class="fw-normal text-center">Subscribe</h3>
          </div>
          <div class="col-lg-6">
            <form class="mb-3">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email address"
                />
                <input
                  type="submit"
                  class="btn btn-theme no-shadow"
                  value="Subscribe"
                />
              </div>
            </form>
          </div>
          <div class="col-12">
            <p class="text-center mb-0 mt-4">
              Copyright &copy;2020. All right reserved | This template is made
              with <span class="ti-heart fg-theme-red"></span> by{" "}
              <a href="https://www.macodeid.com/">MACode ID</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
