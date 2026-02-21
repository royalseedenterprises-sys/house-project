
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #333;
  line-height: 1.6;
  max-width: 900px;
  margin: 50px auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #1a237e;
  margin-bottom: 15px;
  text-align: center;
  text-transform: uppercase;
`;

const Subtitle = styled.h4`
  font-size: 1.2rem;
  color: #3949ab;
  margin-top: 25px;
  margin-bottom: 10px;
  font-weight: 600;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 15px;
`;

const List = styled.ul`
  margin: 15px 0;
  padding-left: 20px;
  list-style: disc;
  li {
    margin-bottom: 10px;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 2px solid #e0e0e0;
  margin: 30px 0;
`;

const RoyalSeedRealEstate = () => {
  return (
    <Container>
      <Title>RoyalSeed Real Estate: Building Value, Growing Trust.</Title>
      <Paragraph>
        In today's fast-evolving property market, choosing the right real
        estate partner is essential for long-term success. RoyalSeed Real
        Estate stands as a trusted name in the industry, committed to
        delivering quality properties, strategic investments, and exceptional
        customer service. With a vision rooted in growth and integrity,
        RoyalSeed continues to create opportunities for homeowners, investors,
        and businesses alike.
      </Paragraph>

      <Divider />

      <Title>A Vision for Sustainable Growth</Title>
      <Paragraph>
        RoyalSeed Real Estate was founded on the principle that property is
        more than just land or buildings — it is the foundation of communities,
        businesses, and futures. The company focuses on sustainable
        development, ensuring that each project contributes positively to the
        surrounding environment and economy.
      </Paragraph>
      <Paragraph>
        By combining market expertise with innovative planning, RoyalSeed
        identifies high‑potential locations and transforms them into valuable
        assets for clients.
      </Paragraph>

      <Divider />

      <Subtitle>1. Residential Properties</Subtitle>
      <Paragraph>
        From modern apartments to luxury homes and gated communities, RoyalSeed
        provides comfortable, secure, and thoughtfully designed living spaces.
      </Paragraph>

      <Subtitle>2. Commercial Properties</Subtitle>
      <Paragraph>
        The company develops and markets office spaces, retail outlets, and
        mixed‑use properties designed to support business growth and maximize
        return on investment.
      </Paragraph>

      <Subtitle>3. Land Sales and Investment Opportunities</Subtitle>
      <Paragraph>
        RoyalSeed carefully selects strategic land parcels in growth corridors,
        offering clients high‑value investment opportunities with strong
        appreciation potential.
      </Paragraph>

      <Subtitle>4. Property Management</Subtitle>
      <Paragraph>
        Through professional property management services, RoyalSeed ensures
        that clients' investments are well‑maintained and profitable.
      </Paragraph>

      <Divider />

      <Subtitle>Commitment to Quality and Transparency</Subtitle>
      <Paragraph>
        One of the key strengths of RoyalSeed Real Estate is its dedication to
        transparency and ethical business practices. Clients receive clear
        documentation, honest pricing, and reliable guidance throughout every
        transaction. This commitment has helped the company build long‑term
        relationships based on trust and satisfaction.
      </Paragraph>

      <Subtitle>Customer‑Centered Approach</Subtitle>
      <Paragraph>
        RoyalSeed understands that every client has unique goals — whether
        buying a first home, expanding a business, or diversifying an
        investment portfolio. The company's experienced team provides
        personalized consultation, market insights, and tailored solutions to
        ensure informed decision‑making.
      </Paragraph>

      <Paragraph>
        By prioritizing customer satisfaction, RoyalSeed turns property
        transactions into seamless and rewarding experiences.
      </Paragraph>

      <Subtitle>Embracing Innovation</Subtitle>
      <Paragraph>
        In a digital age, RoyalSeed Real Estate leverages technology to enhance
        efficiency and convenience. Virtual property tours, digital marketing
        strategies, and data‑driven market analysis allow clients to explore
        opportunities with confidence and clarity.
      </Paragraph>

      <Subtitle>Why Choose RoyalSeed Real Estate</Subtitle>
      <List>
        <li>Proven market expertise.</li>
        <li>Strategic property locations.</li>
        <li>Transparent and ethical practices.</li>
        <li>Customer‑focused service.</li>
        <li>Strong investment potential.</li>
        <li>Long‑term value creation.</li>
      </List>

      <Divider />

      <Subtitle>Conclusion</Subtitle>
      <Paragraph>
        RoyalSeed Real Estate is more than a property company — it is a partner
        in growth and success. Through quality developments, strategic
        investments, and unwavering commitment to clients, RoyalSeed continues
        to shape vibrant communities and profitable opportunities. For
        individuals and businesses seeking reliable real estate solutions,
        RoyalSeed Real Estate represents trust, innovation, and lasting value.
      </Paragraph>
    </Container>
  );
};

export default RoyalSeedRealEstate;
