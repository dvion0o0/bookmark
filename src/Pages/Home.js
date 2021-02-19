import {
  Navbar,
  Sidebar,
  Hero,
  Features,
  Cards,
  Faq,
  Newsletter,
  Footer,
} from "../components";

import React from "react";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Sidebar />
      <Hero />
      <Features />
      <Cards />
      <Faq />
      <Newsletter />
      <Footer />
     <p className="copyright">Coded with ❤️ by Digvijay.</p>
    </main>
  );
};

export default Home;
