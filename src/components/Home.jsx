import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="main--home">
      <Navbar />
      <div className="content content-bg1">

        <h1>You got the travel plans,
          <br/> we got the travel vans.</h1>
        <p>
          Add adventure to your life by joining the #vanlife movement.
          <br/> 
          Rent the perfect van to make your perfect road trip.
        </p>
        <br/> 
        <Link to="vans">Find your van</Link>
      </div>
      <Footer />
    </div>
  );
}
