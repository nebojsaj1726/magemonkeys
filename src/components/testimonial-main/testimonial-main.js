import React, { Component } from "react";
import axios from "axios";
import ReactPlayer from "react-player";

import "./testimonial-main.css";
import ali from "../../images/ali.png";
import ali2 from "../../images/ali2.png";
import ali3 from "../../images/ali3.png";

export class TestimonialMain extends Component {
  state = {
    videoUrl1: "",
    videoUrl2: "",
    videoUrl3: "",
  };

  componentDidMount() {
    axios
      .get("https://demo.magemonkeys.com/wp-json/acf/v3/testimonials")
      .then((res) => {
        this.setState({
          videoUrl1: res.data[0].acf.video_url,
          videoUrl2: res.data[1].acf.video_url,
          videoUrl3: res.data[2].acf.video_url,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { videoUrl1, videoUrl2, videoUrl3 } = this.state;
    return (
      <div
        className="testimonial-main  hideme wow animated  fadeIn"
        data-wow-duration="2s"
      >
        <div className="container">
          <div className="row">
            <h2
              className="black-title c-center hideme wow animated  fadeIn"
              data-wow-duration="2s"
            >
              Testimonials
            </h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="blog_cell">
                <ReactPlayer url={videoUrl3} className="r-player" controls />
                <h5>
                  <img src={ali} alt="" /> Ali Abbas
                </h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog_cell">
                <ReactPlayer url={videoUrl2} className="r-player" controls />

                <h5>
                  <img src={ali2} alt="" /> Fridrik
                </h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog_cell">
                <ReactPlayer url={videoUrl1} className="r-player" controls />

                <h5>
                  <img src={ali3} alt="" /> Jacques
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TestimonialMain;
