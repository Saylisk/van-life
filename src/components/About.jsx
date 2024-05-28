import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Link } from "react-router-dom"


export default function About() {

    return (
      <div className="about">
      <Navbar />
      <div className="content">
          <img className="van-img-2" src="https://s3-alpha-sig.figma.com/img/370c/d3ba/87f1968974ee12ce5da85059cc83bb81?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dje-XwKzREd~HGX8tTQO~UrbKypQgbMIVlvwhE4QOl31IiyZm2zZMCYcmovQe2AV4jctX9zFEfwOzKKihSuDt~ojj2nd3ue8BFZCAMYSOwTi5Kgu1ZuUNh4ZP4TZ7yEKLh~NRQM7OaqzIsL-9ejvHvi9H6RlZLVyNT0pR5IqAHnGmg3OG7JuBUxRYEBOxz-ZyTvIkG~oDzuvVzg8u~1DoaDyOk0X2oP44PTg6u9pYxI80zbOoST3geiZK9aWTZ4LOO7cyB-YE801IYOVhBxfQhjRj87FHN~NhM3rLwBJsl~r4GWp8mu-2mb9Dc~Skwjnd1uRiyHdaEbB2bwYqxBX5g__" alt="Van image" />
          <div className="about--text">
          <h1>Don’t squeeze in a sedan when <br /> you could relax in a van.</h1>
        <br />
        <br />

          <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
          (Hitch costs extra 😉)
            <br />
            <br />
          Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
          <div>
              <h2>Your destination is waiting.
                  <br/>
              Your van is ready.</h2>
              <Link className="link-button" to="/vans">Explore our vans</Link>
          </div>
          </div>
      </div>
      <Footer />
  </div>
    )
  }
  