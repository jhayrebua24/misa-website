import styled from 'styled-components';
import { Link } from 'gatsby';

export const Row = styled.div`
  padding: 0;
  margin: 0;
`;

export const BrandImage = styled.img`
  width: 30rem;
  padding: 15px 0;
  margin: 0;
`;

export const StyledHeader = styled.header`
  width: 100%;
  top: 0;
  background: #062774;
  position: fixed;
`;

export const StyledLink = styled(Link).attrs(props => ({
  className: `px-3 py-2  block uppercase text-sm text-white hover:text-gray-400`,
}))`
  box-sizing: border-box;
  cursor: pointer;
  transition: padding 150ms ease-out;
`;

export const StyledNav = styled.nav`
  border-top: 3px solid #ecc94b;
`;

export const StyledUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
`;
