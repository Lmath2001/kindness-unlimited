import React from "react";
import Carousel from "../Carousel/Carousel";
import Form from "../Form/Form";
import OurProjects from "../OurProjects/OurProjects";
import OurStory from "../OurStory/OurStory";

const Home = () => {
  return (
    <>
      <Carousel />
      <OurStory />
      <OurProjects />
      <Form />
    </>
  );
};

export default Home;
