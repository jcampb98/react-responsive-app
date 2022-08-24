import React from 'react';
import styled from 'styled-components';
import service1 from '../assets/medal.png';
import service2 from '../assets/mask.png';
import service3 from '../assets/debit-card.png';
import service4 from '../assets/area.png';

export default function Services() {
  const data = [
    {
      icon: service1,
      title: "Get Best Prices & Deals from Us",
      subTitle: "Pay through our application and save your money and get rewards.",
    },
    {
      icon: service2,
      title: "Covid-19 Safe",
      subTitle: "We have all the curated hotels that have all the necessary precautions for a safe enviroment from covid.",
    },
    {
      icon: service3,
      title: "Flexible Payment",
      subTitle: "Enjoy our flexible scheme through our app and get rewards on each & every payment",
    },
    {
      icon: service4,
      title: "Find the Best Places Near You!",
      subTitle: "Find the best hotels and places to visit near you in one-single click",
    },
  ];
  
  return (
    <div>Services</div>
  )
}

const Section = styled.section``;
