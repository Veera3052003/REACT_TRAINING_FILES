import React from "react";
import "./About.css";
import { useTypingEffect } from "./typing-effect";

function About() {
  
  const text=useTypingEffect("Welcome to WenStarters, where our culinary journey began over two decades ago. Founded in 2000 by Emily, our family-owned establishment embodies dedication and quality in every aspect. From sourcing the freshest ingredients to crafting mouthwatering dishes, WenStarters delivers an exceptional dining experience.Emily's vision was to create a place where people could savor the goodness of fresh, wholesome food. WenStarters has become a beloved gathering spot, offering a diverse menu that caters to every palate. Our commitment to innovation ensures that every visit is a culinary adventure.We believe in the power of food to unite people and nourish both body and soul. Join us at WenStarters and experience the magic as we continue our culinary legacy. Thank you for being part of our story.",
  15);

  return (
    <section className="about-content">
      <div className="para about_card">
        {text}
      </div>
    </section>
  );
}

export default About;
