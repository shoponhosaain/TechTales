import React from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { useParams } from "react-router-dom";
import data from "../data/generated.json";

const DetailPage = () => {
  const { id } = useParams();

  // Find the item with the matching id
  const item = data.find((val) => val.id === id);

  return (
    <>
      <Header />
      <div className="container">
        {item ? (
          <div style={{ marginTop: "6rem" }}>
            <img src={item.picture} alt="" className="post-img" />
            <h1 className="post-title" style={{ marginTop: "2.5rem" }}>
              {item.title}
            </h1>
            <p style={{ marginTop: "2.5rem" }}>{item.about}</p>
          </div>
        ) : (
          <p style={{ marginTop: "6rem" }}>Item not found</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default DetailPage;
