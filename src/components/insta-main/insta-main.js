import React, { Component } from "react";
import axios from "axios";

import "./insta-main.css";

class InstaMain extends Component {
  state = {
    img1Url: "",
    img2Url: "",
    img3Url: "",
    img4Url: "",
  };

  componentDidMount() {
    const getImg1Url = axios.get(
      "https://demo.magemonkeys.com/wp-json/wp/v2/media/3686"
    );
    const getImg2Url = axios.get(
      "https://demo.magemonkeys.com/wp-json/wp/v2/media/4145"
    );

    const getImg3Url = axios.get(
      "https://demo.magemonkeys.com/wp-json/wp/v2/media/4146"
    );

    const getImg4Url = axios.get(
      "https://demo.magemonkeys.com/wp-json/wp/v2/media/3689"
    );

    Promise.all([getImg1Url, getImg2Url, getImg3Url, getImg4Url]).then(
      (res) => {
        this.setState({
          img1Url: res[0].data.media_details.sizes.full.source_url,
          img2Url: res[1].data.media_details.sizes.full.source_url,
          img3Url: res[2].data.media_details.sizes.full.source_url,
          img4Url: res[3].data.media_details.sizes.full.source_url,
        });
      }
    );
  }

  render() {
    const { img1Url, img2Url, img3Url, img4Url } = this.state;
    return (
      <div className="insta-main ">
        <div className="row p-0">
          <div className="ins-1 col-md-6 p-0 hideme wow animated  fadeIn">
            <a href="/#">
              <img src={img1Url} alt="" className="w100" />
            </a>
          </div>
          <div className="ins-1 col-md-6 p-0 hideme wow animated  fadeIn">
            <a href="/#">
              <img src={img2Url} alt="" className="w100" />
            </a>
          </div>
          <div className="ins-1 col-md-6 p-0 hideme wow animated  fadeIn">
            <a href="/#">
              <img src={img3Url} alt="" className="w100" />
            </a>
          </div>
          <div className="ins-1 col-md-6 p-0 hideme wow animated  fadeIn">
            <a href="/#">
              <img src={img4Url} alt="" className="w100" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default InstaMain;
