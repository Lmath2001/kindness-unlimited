import React from "react";
import { Link } from "react-router-dom";
import "./OurProject.css";
import { project } from "../doc"
const OurProjects = () => {
  return (
    <div>
      <div className="text-center heading">OUR PROJECTS</div>
      <div className="container">
        {/* ---- */}
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="mt-5 card-1">
              <figure class="card__thumb">
                <img
                  src={project.image1}
                  class="card-img-top image-project"
                  alt="..."
                />
                <figcaption class="card__caption">
                  <h2 class="card__title">KINDNESS CIRCLES</h2>
                  <p class="card__snippet">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Officiis, laboriosam. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Corrupti doloremque, dicta
                    assumenda fugit reiciendis eum reprehenderit sit recusandae
                    voluptatem deserunt voluptatibus harum, ipsam, hic nesciunt
                    dolor quidem. Quasi, fugit? Maxime repudiandae, porro sequi
                    atque blanditiis debitis neque sit consequatur quos
                    accusamus officiis reprehenderit, dicta culpa aliquid optio,
                    nemo asperiores. Minima.
                  </p>
                  <Link to="/projects" class="card__button">
                    Read more
                  </Link>
                </figcaption>
              </figure>
            </div>
          </div>

          <div class="col">
            <div class="mt-5 card-1">
              <figure class="card__thumb">
                <img
                  src={project.image2}
                  class="card-img-top image-project"
                  alt="..."
                />
                <figcaption class="card__caption">
                  <h2 class="card__title">DONATE-A-TOI</h2>
                  <p class="card__snippet">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Officiis, laboriosam. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Corrupti doloremque, dicta
                    assumenda fugit reiciendis eum reprehenderit sit recusandae
                    voluptatem deserunt voluptatibus harum, ipsam, hic nesciunt
                    dolor quidem. Quasi, fugit? Maxime repudiandae, porro sequi
                    atque blanditiis debitis neque sit consequatur quos
                    accusamus officiis reprehenderit, dicta culpa aliquid optio,
                    nemo asperiores. Minima.
                  </p>
                  <Link to="/projects"  class="card__button">
                    Read more
                  </Link>
                </figcaption>
              </figure>
            </div>
          </div>
          {/* ---- */}
          <div class="col">
            <div class="mt-5 card-1">
              <figure class="card__thumb">
                <img
                  src={project.image3}
                  class="card-img-top image-project"
                  alt="..."
                />
                <figcaption class="card__caption">
                  <h2 class="card__title">PROJECT NASHTA</h2>
                  <p class="card__snippet">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Officiis, laboriosam. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Corrupti doloremque, dicta
                    assumenda fugit reiciendis eum reprehenderit sit recusandae
                    voluptatem deserunt voluptatibus harum, ipsam, hic nesciunt
                    dolor quidem. Quasi, fugit? Maxime repudiandae, porro sequi
                    atque blanditiis debitis neque sit consequatur quos
                    accusamus officiis reprehenderit, dicta culpa aliquid optio,
                    nemo asperiores. Minima.
                  </p>
                  <Link to="/projects"  class="card__button">
                    Read more
                  </Link>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
