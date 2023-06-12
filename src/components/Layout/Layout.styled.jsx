import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledLink = styled(NavLink)`
  font-size: 28px;
  font-weight: 600;
  color: #001a00;

  &.active {
    color: #a01d1d;
  }
`;

export const Container = styled.div`
  padding: 0px 30px;
  background-color: rgb(255, 250, 250);
`;