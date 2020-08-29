import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./all-work.css";
import rightaerow from "../../images/right-aerow.png";

class AllWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item1Title: "",
      item1Content: "",
      item1Imgurl: "",
      item2Title: "",
      item2Content: "",
      item2Imgurl: "",
      item3Title: "",
      item3Content: "",
      item3Imgurl: "",
      item4Title: "",
      item4Content: "",
      item4Imgurl: "",
      item5Title: "",
      item5Content: "",
      item5Imgurl: "",
      item6Title: "",
      item6Content: "",
      item6Imgurl: "",
      item7Title: "",
      item7Content: "",
      item7Imgurl: "",
      item8Title: "",
      item8Content: "",
      item8Imgurl: "",
      item9Title: "",
      item9Content: "",
      item9Imgurl: "",
      item10Title: "",
      item10Content: "",
      item10Imgurl: "",
      loading: true,
      pageNumber: 1,
    };
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.myRef = React.createRef();
  }

  scrollToMyRef() {
    window.scrollTo(0, this.myRef.current.offsetTop);
  }

  nextPage() {
    this.setState((prevState) => {
      if (prevState.pageNumber < 3) {
        return {
          pageNumber: prevState.pageNumber + 1,
        };
      }
    });
    this.scrollToMyRef();
  }

  prevPage() {
    this.setState((prevState) => {
      if (prevState.pageNumber > 1) {
        return {
          pageNumber: prevState.pageNumber - 1,
        };
      }
    });
    this.scrollToMyRef();
  }

  componentDidMount() {
    const getAllItems = axios.get(
      "https://www.magemonkeys.com/wp-json/wp/v2/ourprojects"
    );
    const getImg1 = axios.get(
      "https://www.magemonkeys.com/wp-json/wp/v2/media/4903"
    );
    const getImg2 = axios.get(
      "https://www.magemonkeys.com/wp-json/wp/v2/media/3686"
    );
    const getImg3 = axios.get(
      "https://www.magemonkeys.com/wp-json/wp/v2/media/4145"
    );
    const getImg4 = axios.get(
      "https://www.magemonkeys.com/wp-json/wp/v2/media/4146"
    );
    const getImg5 = axios.get(
      "https://www.magemonkeys.com/wp-json/wp/v2/media/3689"
    );
    const getImg6 = axios.get(
      "https://www.magemonkeys.com/wp-json/wp/v2/media/3427"
    );
    const getImg7 = axios.get(
      "https://www.magemonkeys.com/wp-json/wp/v2/media/3430"
    );
    const getImg8 = axios.get(
      "https://www.magemonkeys.com/wp-json/wp/v2/media/3687"
    );
    const getImg9 = axios.get(
      "https://www.magemonkeys.com/wp-json/wp/v2/media/3420"
    );
    const getImg10 = axios.get(
      "https://www.magemonkeys.com/wp-json/wp/v2/media/3691"
    );

    Promise.all([
      getAllItems,
      getImg1,
      getImg2,
      getImg3,
      getImg4,
      getImg5,
      getImg6,
      getImg7,
      getImg8,
      getImg9,
      getImg10,
    ])
      .then((res) => {
        this.setState({
          item1Title: res[0].data[0].title.rendered,
          item1Content: res[0].data[0].excerpt.rendered,
          item1Imgurl: res[1].data.media_details.sizes.full.source_url,
          item2Title: res[0].data[1].title.rendered,
          item2Content: res[0].data[1].excerpt.rendered,
          item2Imgurl: res[2].data.media_details.sizes.full.source_url,
          item3Title: res[0].data[2].title.rendered,
          item3Content: res[0].data[2].excerpt.rendered,
          item3Imgurl: res[3].data.media_details.sizes.full.source_url,
          item4Title: res[0].data[3].title.rendered,
          item4Content: res[0].data[3].excerpt.rendered,
          item4Imgurl: res[4].data.media_details.sizes.full.source_url,
          item5Title: res[0].data[4].title.rendered,
          item5Content: res[0].data[4].excerpt.rendered,
          item5Imgurl: res[5].data.media_details.sizes.full.source_url,
          item6Title: res[0].data[5].title.rendered,
          item6Content: res[0].data[5].excerpt.rendered,
          item6Imgurl: res[6].data.media_details.sizes.full.source_url,
          item7Title: res[0].data[6].title.rendered,
          item7Content: res[0].data[6].excerpt.rendered,
          item7Imgurl: res[7].data.media_details.sizes.full.source_url,
          item8Title: res[0].data[7].title.rendered,
          item8Content: res[0].data[7].excerpt.rendered,
          item8Imgurl: res[8].data.media_details.sizes.full.source_url,
          item9Title: res[0].data[8].title.rendered,
          item9Content: res[0].data[8].excerpt.rendered,
          item9Imgurl: res[9].data.media_details.sizes.full.source_url,
          item10Title: res[0].data[9].title.rendered,
          item10Content: res[0].data[9].excerpt.rendered,
          item10Imgurl: res[10].data.media_details.sizes.full.source_url,
          loading: false,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const {
      item1Title,
      item1Content,
      item1Imgurl,
      item2Title,
      item2Content,
      item2Imgurl,
      item3Title,
      item3Content,
      item3Imgurl,
      item4Title,
      item4Content,
      item4Imgurl,
      item5Title,
      item5Content,
      item5Imgurl,
      item6Title,
      item6Content,
      item6Imgurl,
      item7Title,
      item7Content,
      item7Imgurl,
      item8Title,
      item8Content,
      item8Imgurl,
      item9Title,
      item9Content,
      item9Imgurl,
      item10Title,
      item10Content,
      item10Imgurl,
      pageNumber,
      loading,
    } = this.state;

    let page;

    if (pageNumber === 1) {
      page = (
        <div>
          <div className="row all-work-row">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="all-work-img">
                <img src={item1Imgurl} alt="" />
              </div>
            </div>

            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="all-work-cont">
                <h3
                  className="black-title c-center  hideme wow animated  fadeIn c-left"
                  data-wow-duration="2s"
                >
                  {item1Title}
                </h3>
                <p dangerouslySetInnerHTML={{ __html: item1Content }}></p>
                <Link to="/karoe" className="orange-btn">
                  View Project
                  <img src={rightaerow} alt="" />
                </Link>
              </div>
            </div>
          </div>

          <div className="row all-work-row left-img">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="all-work-cont">
                <h3
                  className="black-title c-center  hideme wow animated  fadeIn c-left"
                  data-wow-duration="2s"
                >
                  {item2Title}
                </h3>
                <p dangerouslySetInnerHTML={{ __html: item2Content }}></p>
                <Link
                  to="/interior-fashion-lifestyle-ecommerce-store-development-house-of-hackney"
                  className="orange-btn"
                >
                  View Project
                  <img src={rightaerow} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="all-work-img">
                <img src={item2Imgurl} alt="" />
              </div>
            </div>
          </div>

          <div className="row all-work-row">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="all-work-img">
                <img src={item3Imgurl} alt="" />
              </div>
            </div>

            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="all-work-cont">
                <h3
                  className="black-title c-center  hideme wow animated  fadeIn c-left"
                  data-wow-duration="2s"
                >
                  {item3Title}
                </h3>
                <p dangerouslySetInnerHTML={{ __html: item3Content }}></p>
                <Link to="/surplus-industrial-supply" className="orange-btn">
                  View Project
                  <img src={rightaerow} alt="" />
                </Link>
              </div>
            </div>
          </div>

          <div className="row all-work-row left-img">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="all-work-cont">
                <h3
                  className="black-title c-center  hideme wow animated  fadeIn c-left"
                  data-wow-duration="2s"
                >
                  {item4Title}
                </h3>
                <p dangerouslySetInnerHTML={{ __html: item4Content }}></p>
                <Link to="/imedicale-store" className="orange-btn">
                  View Project
                  <img src={rightaerow} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="all-work-img">
                <img src={item4Imgurl} alt="" />
              </div>
            </div>
          </div>
        </div>
      );
    } else if (pageNumber === 2) {
      page = (
        <div>
          <div className="row all-work-row">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="all-work-img">
                <img src={item5Imgurl} alt="" />
              </div>
            </div>

            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="all-work-cont">
                <h3
                  className="black-title c-center  hideme wow animated  fadeIn c-left"
                  data-wow-duration="2s"
                >
                  {item5Title}
                </h3>
                <p dangerouslySetInnerHTML={{ __html: item5Content }}></p>
                <Link
                  to="/door-furniture-ecommerce-solution-uber-doors"
                  className="orange-btn"
                >
                  View Project
                  <img src={rightaerow} alt="" />
                </Link>
              </div>
            </div>
          </div>

          <div className="row all-work-row left-img">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="all-work-cont">
                <h3
                  className="black-title c-center  hideme wow animated  fadeIn c-left"
                  data-wow-duration="2s"
                >
                  {item6Title}
                </h3>
                <p dangerouslySetInnerHTML={{ __html: item6Content }}></p>
                <Link
                  to="/gold-silver-biblical-coins-shop-ecommerce-development"
                  className="orange-btn"
                >
                  View Project
                  <img src={rightaerow} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="all-work-img">
                <img src={item6Imgurl} alt="" />
              </div>
            </div>
          </div>

          <div className="row all-work-row">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="all-work-img">
                <img src={item7Imgurl} alt="" />
              </div>
            </div>

            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="all-work-cont">
                <h3
                  className="black-title c-center  hideme wow animated  fadeIn c-left"
                  data-wow-duration="2s"
                >
                  {item7Title}
                </h3>
                <p dangerouslySetInnerHTML={{ __html: item7Content }}></p>
                <Link
                  to="/home-furniture-ecommerce-store-development"
                  className="orange-btn"
                >
                  View Project
                  <img src={rightaerow} alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row all-work-row left-img">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="all-work-cont">
                <h3
                  className="black-title c-center  hideme wow animated  fadeIn c-left"
                  data-wow-duration="2s"
                >
                  {item8Title}
                </h3>
                <p dangerouslySetInnerHTML={{ __html: item8Content }}></p>
                <Link
                  to="/garden-products-remedies-ecommerce-shop-development"
                  className="orange-btn"
                >
                  View Project
                  <img src={rightaerow} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="all-work-img">
                <img src={item8Imgurl} alt="" />
              </div>
            </div>
          </div>
        </div>
      );
    } else if (pageNumber === 3) {
      page = (
        <div>
          <div className="row all-work-row">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="all-work-img">
                <img src={item9Imgurl} alt="" />
              </div>
            </div>

            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="all-work-cont">
                <h3
                  className="black-title c-center  hideme wow animated  fadeIn c-left"
                  data-wow-duration="2s"
                >
                  {item9Title}
                </h3>
                <p dangerouslySetInnerHTML={{ __html: item9Content }}></p>
                <Link to="/canapebox" className="orange-btn">
                  View Project
                  <img src={rightaerow} alt="" />
                </Link>
              </div>
            </div>
          </div>

          <div className="row all-work-row left-img">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="all-work-cont">
                <h3
                  className="black-title c-center  hideme wow animated  fadeIn c-left"
                  data-wow-duration="2s"
                >
                  {item10Title}
                </h3>
                <p dangerouslySetInnerHTML={{ __html: item10Content }}></p>
                <Link
                  to="/personalized-printing-ecommerce-solution-ink2print"
                  className="orange-btn"
                >
                  View Project
                  <img src={rightaerow} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="all-work-img">
                <img src={item10Imgurl} alt="" />
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="work-main row-am">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="container" ref={this.myRef}>
            {page}
          </div>
        )}
        <div
          className="prev-next-main hideme wow animated fadeIn"
          data-wow-duration="2s"
        >
          <div className="container">
            <div className="row">
              <div className="prev-next">
                <div className="prev">
                  <button onClick={this.prevPage} className="load-more-btn">
                    Previous
                  </button>
                </div>
                <div className="next">
                  <button onClick={this.nextPage} className="load-more-btn">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllWork;
