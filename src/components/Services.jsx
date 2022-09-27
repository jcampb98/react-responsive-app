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
    <Section id="services">
      {
        data.map((service) => {
          return(
            <div className="service">
              <div className="icon">
                <img src={ service.icon } alt="an icon" />
              </div>
              <h3>{ service.title }</h3>
              <p>{ service.subTitle }</p>
            </div>
          )
        })
      }
    </Section>
  )
}

const Section = styled.section`
  padding: 5rem 0;
  display: grid;
  grid-templated-columns: repeat(4, 1fr);
  gap: 1rem;
  .service {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: #66b2b2;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transform: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        height: 2.4rem;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
