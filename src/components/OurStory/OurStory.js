import React from "react";
import "./OurStory.css";

const OurStory = () => {
  return (
    <div className="background">
      <div className="text-center heading">Our Story</div>
      <div class="container mt-2">
        <div class="row">
          <div class="col-md-7 px-3">
            <div class="card">
              <div class="card-block">
                <h4 class="card-title text-center bg-light p-3">OUR MISSION</h4>
                <div className="card-text p-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officiis, laboriosam. Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Officiis, laboriosam.
                </div>
                <div id="headingOne">
                  <i
                    class="fas fa-angle-double-down icon"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  ></i>
                  <div class="accordion" id="accordionExample"></div>

                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="card-text p-2">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Officiis, laboriosam. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Corrupti doloremque, dicta
                      assumenda fugit reiciendis eum reprehenderit sit
                      recusandae voluptatem deserunt voluptatibus harum, ipsam,
                      hic nesciunt dolor quidem. Quasi, fugit? Maxime
                      repudiandae, porro sequi atque blanditiis debitis neque
                      sit consequatur quos accusamus officiis reprehenderit,
                      dicta culpa aliquid optio, nemo asperiores.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5 mt-2 text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaV4G7Cg51SJyYNX0d8-3FbYmWrXG9qIGKkbS1NUQG8BsEkWE3lfdGWgXbUb2Fms7bhcE&usqp=CAU"
              alt=""
              className="rounded"
            />
          </div>
        </div>

        {/* ------------ */}

        <div class="row">
          <div class="col-md-5 mt-3 text-center">
            <img
              src="https://mlbky1ucqujg.i.optimole.com/5w3IFV4.4-JE~2b7de/w:auto/h:auto/q:75/https://kindnessunlimited.in/wp-content/uploads/2019/12/MG_1120-scaled.jpg"
              alt=""
              className="rounded"
            />
          </div>
          <div class="col-md-7 px-3">
            <div class="card">
              <div class="card-block">
                <h4 class="card-title text-center bg-light p-3">OUR VISION</h4>
                <div className="card-text p-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officiis, laboriosam. Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Officiis, laboriosam.
                </div>
                <div id="headingTwo">
                  <i
                    class="fas fa-angle-double-down icon"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  ></i>
                  <div class="accordion" id="accordionExample"></div>

                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="card-text p-2">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Officiis, laboriosam. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Corrupti doloremque, dicta
                      assumenda fugit reiciendis eum reprehenderit sit
                      recusandae voluptatem deserunt voluptatibus harum, ipsam,
                      hic nesciunt dolor quidem. Quasi, fugit? Maxime
                      repudiandae, porro sequi atque blanditiis debitis neque
                      sit consequatur quos accusamus officiis reprehenderit,
                      dicta culpa aliquid optio, nemo asperiores.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* ---------- */}
        <div class="row">
          <div class="col-md-7 px-3 mb-2">
            <div class="card">
              <div class="card-block">
                <h4 class="card-title text-center bg-light p-3">OUR VALUES</h4>
                <div className="card-text p-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officiis, laboriosam. Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Officiis, laboriosam.
                </div>
                <div id="headingThree">
                  <i
                    class="fas fa-angle-double-down icon"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  ></i>
                  <div class="accordion" id="accordionExample"></div>

                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="card-text p-2">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Officiis, laboriosam. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Corrupti doloremque, dicta
                      assumenda fugit reiciendis eum reprehenderit sit
                      recusandae voluptatem deserunt voluptatibus harum, ipsam,
                      hic nesciunt dolor quidem. Quasi, fugit? Maxime
                      repudiandae, porro sequi atque blanditiis debitis neque
                      sit consequatur quos accusamus officiis reprehenderit,
                      dicta culpa aliquid optio, nemo asperiores.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5 mt-2 mb-2 text-center">
            <img
              src="https://mlbky1ucqujg.i.optimole.com/5w3IFV4.4-JE~2b7de/w:auto/h:auto/q:75/https://kindnessunlimited.in/wp-content/uploads/2020/01/IMG-20200116-WA0014.jpg"
              alt=""
              className="rounded rounded mx-auto d-block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
