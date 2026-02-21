import React from "react";
import styled from "styled-components";
import { FaMapMarkerAlt, FaClock, FaPhone } from "react-icons/fa";

// Styled Components
const Section = styled.section`
  max-width: 1000px;
  margin: 60px auto;
  padding: 50px 30px;
  background: #f7f8fa;
  border-radius: 20px;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.08);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.8rem;
  color: #1a1a1a;
  margin-bottom: 45px;
  letter-spacing: 1px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 60px;
  }
`;

const ContactItem = styled.div`
  background: #ffffff;
  padding: 30px 35px;
  border-radius: 15px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 6px 22px rgba(0, 0, 0, 0.07);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
  }

  h5 {
    font-size: 1.1rem;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0;
  }

  p {
    font-size: 1.15rem;
    color: #555;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  svg {
    color: #0077cc;
    min-width: 22px;
    font-size: 1.2rem;
  }
`;

const Contact = () => {
  return (
    <Section id="contact">
      <Heading>ROYALSEED ENTERPRISES NIG</Heading>
      <Container>
        <ContactItem>
          <h5>Office Address</h5>
          <p><FaMapMarkerAlt /> 28 Wetheral Road, Owerri, Imo State</p>
          <p><FaClock /> Monday - Saturday, 8:00am - 5:00pm</p>
        </ContactItem>

        <ContactItem>
          <h5>Contact</h5>
          <p><FaPhone /> +234 8166390010</p>
        </ContactItem>
      </Container>
    </Section>
  );
};

export default Contact;
