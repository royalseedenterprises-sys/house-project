import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  max-width: 900px;
  margin: 50px auto;
  padding: 30px 25px;
  color: #333;
  line-height: 1.8;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

const Title = styled.h2`
  font-size: 2.4rem;
  text-align: center;
  color: #1a237e;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Subtitle = styled.h4`
  font-size: 1.5rem;
  color: #3949ab;
  margin-top: 30px;
  margin-bottom: 15px;
  font-weight: 600;
  border-left: 4px solid #3949ab;
  padding-left: 10px;
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
  font-size: 1rem;
  line-height: 1.7;
  text-align: justify;
`;

const List = styled.ul`
  margin-left: 20px;
  margin-bottom: 20px;
  list-style-type: disc;

  li {
    margin-bottom: 10px;
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const About = () => {
  return (
    <Container>
      <Title>About RoyalSeed Real Estate</Title>
      
      <Paragraph>
        RoyalSeed Real Estate is a premier real estate company committed to
        delivering exceptional properties, investment opportunities, and
        customer service. With years of experience in the market, we combine
        expertise, innovation, and integrity to help clients achieve their
        real estate goals.
      </Paragraph>

      <Subtitle>Our Mission</Subtitle>
      <Paragraph>
        To provide high-quality real estate solutions that build value,
        enhance communities, and create lasting trust with our clients.
      </Paragraph>

      <Subtitle>Our Vision</Subtitle>
      <Paragraph>
        To be the leading real estate company recognized for sustainable
        growth, innovation, and client-centered solutions across residential,
        commercial, and investment properties.
      </Paragraph>

      <Subtitle>Our Values</Subtitle>
      <List>
        <li>Integrity and transparency in all dealings</li>
        <li>Client-focused services and personalized solutions</li>
        <li>Commitment to sustainable development</li>
        <li>Innovation through technology and market research</li>
      </List>
    </Container>
  );
};

export default About;
