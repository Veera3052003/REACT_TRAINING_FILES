import React from "react";
import { Container } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar,faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';
import './Card.css'

const RatingIcon=({rating})=>{
    const fullStars=Math.floor(rating);
    const hasHalfStar=rating%1!==0;

    //Generate full star icons
    const fullStarIcons=Array(fullStars).fill().map((_,index)=><FontAwesomeIcon key={index} icon={faStar} className="pro_rating" />)

    //Generate half star icon if necessary
    const halfStarIcon=hasHalfStar && <FontAwesomeIcon icon={faStarHalfAlt} className="pro_rating"  />
    
    return(
      <Container className="rating_style">
        {fullStarIcons}
        {halfStarIcon}
      </Container>
    )

  }

export default RatingIcon;