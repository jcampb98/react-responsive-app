import React from 'react';
import styled from 'styled-components';
import { BsLinkedin, BsFacebook} from 'react-icons/bs';
import { AiFillInstagram} from 'react-icons/ai';

export default function Footer() {
  return (
  <FooterContainer>
    <span>Copyright &copy; 2022 Joshua Campbell. All rights reserved</span>
    <ul className="links">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#services">Services</a>
      </li>
      <li>
        <a href="#recommend">Recommend</a>
      </li>
      <li>
        <a href="#testimonial">Testimonials</a>
      </li>
    </ul>
    <ul className="social_links">
      <li>
        <BsFacebook />
      </li>
      <li>
        <BsLinkedin />
      </li>
      <li>
        <AiFillInstagram />
      </li>
    </ul>
  </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: #006666;
  border-radius: 0.5rem;
  padding: 2.5rem;
  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        text-decoration: none;
        color: black;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #66b2b2; 
        }
      }
      svg {
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        &:hover { 
          color: #66b2b2;
        }
      }
    }
  } 
`;