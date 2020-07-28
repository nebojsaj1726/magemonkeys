import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./blog-list.css";
import blog1 from "../../images/blog1.png";
import cright from "../../images/c-right.png";

class BlogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      visible: 6,
      loading: true,
    };
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState((prevState) => {
      return { visible: prevState.visible + 6 };
    });
  }

  componentDidMount() {
    axios
      .get("https://www.magemonkeys.com/wp-json/wp/v2/posts")
      .then((res) =>
        this.setState({
          items: res.data,
          loading: false,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div
        className="row-am blog-list hideme wow animated  fadeIn"
        data-wow-duration="2s"
      >
        <div className="container">
          {this.state.loading ? (
            <div className="loading">Loading...</div>
          ) : (
            <div>
              <div className="row  blog-lit-inr">
                {this.state.items.slice(0, this.state.visible).map((item) => {
                  return (
                    <div
                      className="hideme col-sm-12 col-lg-4 col-md-6 wow animated  fadeIn "
                      data-wow-duration="2s"
                      key={item.id}
                    >
                      <div className="blog-s">
                        <div className="blog-img">
                          <img src={blog1} alt="" />
                        </div>
                        <div className="blog-cont">
                          <h4 className="black-title-small">
                            {item.title.rendered}
                          </h4>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item.excerpt.rendered,
                            }}
                          ></div>
                          <Link
                            to={`/blog-detail/${item.id}`}
                            className="read-more"
                          >
                            <img src={cright} alt="" />
                            Read article
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="row">
                <div className="load-more">
                  {this.state.visible < this.state.items.length && (
                    <button
                      type="button"
                      onClick={this.loadMore}
                      className="load-more-btn"
                    >
                      LOAD MORE
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default BlogList;
