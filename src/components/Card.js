import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const {data,img,category} = props;
    return (
        <>
            <div className="post-box tech">
      <img src={img} alt="" className="post-img" />
      <h2 className="category">{category}</h2>
      <Link to={"/details/"+data.id} className="post-title">
        {data.title}
      </Link>
      <p className="post-description">
        {data.about}
      </p>
      
    </div>
        </>
    );
};

export default Card;