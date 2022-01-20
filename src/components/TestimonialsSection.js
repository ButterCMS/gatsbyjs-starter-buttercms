import * as React from "react"
import Testimonial from "./Testimonial"

const TestimonialSection = (props) => {
  return (
    <section id={props.fields.scroll_anchor_id} className="testimonial-section mt-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div className="testimonial-active-wrapper">

              <div className="section-title text-center">
                <h2 className="mb-20">{props.fields.headline}</h2>
              </div>

              <div className="testimonial-active">
                {props.fields.testimonial.map((testimonial, i) => <Testimonial key={i} {...testimonial} />)}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection;
