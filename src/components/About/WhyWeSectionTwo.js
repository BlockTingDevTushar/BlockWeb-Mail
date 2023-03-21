import React, { Component } from 'react';

class WhyWeTwo extends Component {

  render() {

    return (
      <section className="why-we bg-grey pt-125 pb-75 position-relative fix">
        <div className="common-shape-wrapper wow slideInLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms">
          <div className="common-shape-inner"></div>
        </div>
        <div className="container z-index">
          <div className="row justify-content-between">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="choose-left mb-40 mr-xs-0 mr-md-0 mr-lg-0 mr-90" data-aos="fade-up-right" data-aos-duration="1000">
                <div className="section-title-wrapper">
                  <h5 className="section-subtitle mb-20">All Categories List</h5>
                  <h2 className="section-title mb-35">Why Choose Us</h2>
                </div>
                <p>Growing a business is like nurturing a child and we understand that. Our services are not bound
                  to just running successful ad campaigns but to ensure that your business gets the right exposure at the right time.
                </p>
                
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="choose-right" data-aos="fade-left" data-aos-duration="1000">
                <div className="accordion" id="accordionExample">
                <div className="why-tab-list">
                  <ul>
                    <li><i className="far fa-check"></i>Awareness: Organize campaigns and advertisements to ensure that the target audience is familiar with your product</li>
                    <li><i className="far fa-check"></i>Interest: Identify which person is genuinely interested in your product through customized emails, content, and newsletters</li>
                    <li><i className="far fa-check"></i>Consideration: Give a taste of your product to the customer to develop intent through targetted content and free trials</li>
                    <li><i className="far fa-check"></i>Intent: Target individual customers by evangelising your USPs and demonstrating the benefits of your product</li>
                    <li><i className="far fa-check"></i>Evaluation: Providing customer testimonials, catalogues, and case studies to build the trust of the customer in your product</li>
                    <li><i className="far fa-check"></i>Purchase: Conversion of a prospect into a customer and working on the post-purchase experience to ensure a lifetime loyalty.</li>
                  </ul>
                </div>
                {/* <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How to process the funtion for development?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>There are many variations of passages of available but the majority have suffered alteration in that some form by injected randomised words which don’t look even as slightly believable.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Where should I incorporate my business?
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Web fonts are often terrible for web performance and none of the font loading strategies are particularly effective to address that. Upcoming font options may finally deliver on the promise.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        How there are many variations of passages
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Front-end and design are remarkably complex these days. That’s why we invite kind, smart folks from the community to run online workshops for all of us to learn together. And we have new ones.</p>
                      </div>
                    </div> 
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WhyWeTwo;