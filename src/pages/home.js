import React from "react";
import Header from "./../components/Header";
import Hero from "../components/Hero";
import SingleBlog from "../components/SingleBlog";
import CardSection from "./../components/CardSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <SingleBlog />
      <CardSection />
      <Footer />
    </>
  );
};

export default Home;
