import React, { useState } from 'react';
import styled from 'styled-components';
import Destination1 from '../assets/destination1.jpg';
import Destination2 from '../assets/destination2.jpg';
import Destination3 from '../assets/destination3.jpg';
import Destination4 from '../assets/destination4.jpg';
import Destination5 from '../assets/destination5.jpg';
import info1 from '../assets/plane.png';
import info2 from '../assets/hotel.png';
import info3 from '../assets/dinner.png';

export default function Recommend() {
  //this is an array of string containing data to be displayed on the website to show the user
  //what holiday destination there is available to recommend.
  const data = [
    {
      image: Destination1,
      title: "London",
      subTitle: "London, England is the UK's capital",
      cost: "£900",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination2,
      title: "Edinburgh",
      subTitle: "Edinburgh, Scotland",
      cost: "£1,200",
      duration: "Approx 5 night trip",
    },
    {
      image: Destination3,
      title: "Athens",
      subTitle: "Athens, Greece and is the capital of Greece",
      cost: "£2,000",
      duration: "Approx 10 night trip",
    },
    {
      image: Destination4,
      title: "Los Angeles",
      subTitle: "Los Angeles, United State of America",
      cost: "£1,500",
      duration: "Approx 4 night trip",
    },
    {
      image: Destination5,
      title: "Rome",
      subTitle: "Rome, Italy",
      cost: "£850",
      duration: "Approx 2 night trip",
    },
  ];

  //This an array of strings containing information for the website
  const packages = [
    "Weekend Break",
    "Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];
  
  const[active, setActive] = useState(1);

  return (
    <Section id='recommend'>
      <div className="title">
        <h2>Recommended Destinations</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li className={active===index + 1 ? "active" : ""} onClick={() => setActive(index + 1)}>{pkg}</li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {
          data.map((destination) => {
            return (
              <div className="destination">
                <img src={destination.image} alt="a Destination" />
                <h3>{destination.title}</h3>
                <p>{destination.subTitle}</p>
                <div className="info">
                  <div className="services">
                    <img src={info1} alt="Icon of a plane" />
                    <img src={info2} alt="Icon of a hotel" />
                    <img src={info3} alt="Icon of a dinner plate with a fork & a knife" />
                  </div>
                  <h4>{destination.cost}</h4>
                </div>
                <div className="distance">
                  <span>1000 Kms</span>
                  <span>{destination.duration}</span>
                </div>
              </div>
            );
          })
        }
      </div>
    </Section>
  )
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.5rem solid #006666;
      }
      .active {
        border-bottom: 0.5rem solid #66b2b2;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0,5rem;
      background-color: #66b2b2;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box_shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
    }
    img {
      width: 100%;
    }
    .info {
      display: flex;
      align-items: center;
      .services {
        display: flex;
        gap: 0.3rem;
        img {
          border-radius: 1rem;
          background-color: #66b2b2;
          width: 2rem;
          padding: 0.3rem 0.4rem;
        }
      }
      display: flex;
      justify-content: space-between;
    }
    .distance {
      display: flex;
      justify-content: space-between;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;