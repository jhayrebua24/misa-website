import React, { useState } from 'react';
import styled from 'styled-components';
import { Scroll } from 'react-fns';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Container from '../Container';
import {
  Row,
  BrandImage,
  StyledHeader,
  StyledLink,
  StyledUl,
  StyledNav,
} from './Utils';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo-name.png" }) {
        publicURL
      }
    }
  `);

  return (
    <Scroll
      render={({ y }) => {
        const scrolled = y > 0;
        return (
          <StyledHeader>
            <Row>
              <Container>
                <Link to="/">
                  <BrandImage
                    scrolled={+scrolled}
                    alt="misa-logo"
                    src={data.logo.publicURL}
                  />
                </Link>
              </Container>
            </Row>
            <StyledNav>
              <Container>
                <StyledUl>
                  <li className="mx-1 my-0">
                    <StyledLink scrolled={+scrolled} to="/">
                      home
                    </StyledLink>
                  </li>
                  <li className="mx-1 my-0">
                    <StyledLink scrolled={+scrolled} to="/programs">
                      programs
                    </StyledLink>
                  </li>
                  <li className="mx-1 my-0">
                    <StyledLink scrolled={+scrolled} to="/gallery">
                      gallery
                    </StyledLink>
                  </li>
                  <li className="mx-1 my-0">
                    <StyledLink scrolled={+scrolled} to="/calendar">
                      training calendar
                    </StyledLink>
                  </li>
                  <li className="mx-1 my-0">
                    <StyledLink scrolled={+scrolled} to="/events">
                      events
                    </StyledLink>
                  </li>
                  <li className="mx-1 my-0">
                    <StyledLink scrolled={+scrolled} to="/contact">
                      contact
                    </StyledLink>
                  </li>
                </StyledUl>
              </Container>
            </StyledNav>
          </StyledHeader>
        );
      }}
    />
  );
};

export default Header;
