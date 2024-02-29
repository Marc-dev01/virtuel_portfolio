import React, { useState, useEffect } from "react";

const Fraction = () => {
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const factsSection = document.getElementById("facts");
      if (!factsSection) return;

      const factsSectionTop = factsSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (factsSectionTop < windowHeight * 0.75) {
        setStartCounting(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (startCounting) {
      const animateCounters = () => {
        const counters = document.querySelectorAll(".number");

        counters.forEach((counter) => {
          const start = 0;
          const end = +counter.getAttribute("data-number");
          const duration = 2000; // You can adjust the duration as needed

          let startTime;

          const updateCounter = (timestamp) => {
            if (!startTime) startTime = timestamp;

            const progress = timestamp - startTime;
            const value =
              Math.floor((end - start) * (progress / duration)) + start;

            counter.textContent = value;

            if (progress < duration) {
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = end;
            }
          };

          requestAnimationFrame(updateCounter);
        });
      };

      animateCounters();
    }
  }, [startCounting]);

  return (
    <div
      className="vg-page page-funfact"
      style={{ backgroundImage: `url(img/bg_banner.jpg)` }}
    >
      <div className="container">
        <div id="facts" className="row section-counter">
          <div className="col-md-6 col-lg-3 py-4 wow fadeIn">
            <h1 className="number" data-number="768">
              0
            </h1>
            <span>Clients</span>
          </div>
          <div className="col-md-6 col-lg-3 py-4 wow fadeIn">
            <h1 className="number" data-number="230">
              0
            </h1>
            <span>Project Compleate</span>
          </div>
          <div className="col-md-6 col-lg-3 py-4 wow fadeIn">
            <h1 className="number" data-number="97">
              0
            </h1>
            <span>Project Ongoing</span>
          </div>
          <div className="col-md-6 col-lg-3 py-4 wow fadeIn">
            <h1 className="number" data-number="699">
              0
            </h1>
            <span>Client Satisfaction</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fraction;
