import React from 'react';
import data from "../data/generated.json"
import { Link } from 'react-router-dom';
const SingleBlog = () => {

    return (
        <>

    <section className="about container" id="about">
  <div className="contentBx">
    <h2 className="titleText">{data[0].title}</h2>
    <p className="title-text">
      {data[0].about}
    </p>
    <Link to={"/details/1"} className="btn2">
      Read more
    </Link>
  </div>
  <div className="imgBx">
    <img src={data[0].picture} alt="" className="fitBg" style={{marginTop:"5rem"}}/>
  </div>
</section>

        </>
    );
};

export default SingleBlog;