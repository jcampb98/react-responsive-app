import React from 'react';
import styled from 'styled-components'; //this imports the styled library which is used to style the navbar of the app
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container">
            <img src={logo} alt="Logo of the website" className="logo-brand" />
            Splash Travel
          </div>
          <div className="toggle"></div>
          <ul>
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
            <button>Connect</button>
          </ul>
        </div>
      </Nav>
    </>
  )
}

//this styled-components styles the navbar by looking for the React component that matches it
//which is the nav bar tag known as <Nav></Nav>
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.2rem;
      font-weight: 900;
      text-transform: uppercase;
    }
    .toggle {
      display: none;
    }
  }
  ul {
    display: flex;
    gap: 1rem;
    list-style-type: none;
    li {
      a {
        text-decoration: none;
        color: #004c4c;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #004c4c;
        }
      }
      &:first-of-type {
        a {
          color: #66b2b2;
          font-weight: 900;
        }
      }
    }
  }
  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: white;
    background-color: #004c4c;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #66b2b2;
    }
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
  .logo-brand {
    height: 64px;
    width: 64px;
  }
`;