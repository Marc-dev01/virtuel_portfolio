import React from "react";

const Blog = () => {
  return (
    <div className="vg-page page-blog" id="blog">
      <div className="container">
        <div className="text-center">
          <div className="badge badge-subhead wow fadeInUp" data-aos="fade-up">
            Blog
          </div>
        </div>
        <h1 className="text-center fw-normal wow fadeInUp" data-aos="fade-up">
          Latest Post
        </h1>
        <div className="row post-grid">
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-aos="fade-up">
            <div className="card">
              <div className="img-place">
                <img src="img/work/work-9.jpg" alt="" />
              </div>
              <div className="caption">
                <a href="javascript:void(0)" className="post-category">
                  Technology
                </a>
                <a href="#" className="post-title">
                  Invision design forward fund
                </a>
                <span className="post-date">
                  <span className="sr-only">Published on</span> May 22, 2018
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-aos="fade-up">
            <div className="card">
              <div className="img-place">
                <img src="img/work/work-6.jpg" alt="" />
              </div>
              <div className="caption">
                <a href="javascript:void(0)" className="post-category">
                  Business
                </a>
                <a href="#" className="post-title">
                  Announcing a plan for small teams
                </a>
                <span className="post-date">
                  <span className="sr-only">Published on</span> May 22, 2018
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-aos="fade-up">
            <div className="card">
              <div className="img-place">
                <img src="img/work/work-1.jpg" alt="" />
              </div>
              <div className="caption">
                <a href="javascript:void(0)" className="post-category">
                  Design
                </a>
                <a href="#" className="post-title">
                  5 basic tips for illustrating
                </a>
                <span className="post-date">
                  <span className="sr-only">Published on</span> May 22, 2018
                </span>
              </div>
            </div>
          </div>
          <div
            className="col-12 text-center py-3 wow fadeInUp"
            data-aos="fade-up"
          >
            <a href="blog-fullbar.html" className="btn btn-theme">
              See All Post
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
