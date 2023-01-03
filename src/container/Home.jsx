import React from "react";
import { Header, Hero, Movies } from "../components";
import Matrix from "../components/Matrix";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Movies/>
      <Matrix/>
    </>
  );
};

export default Home;
