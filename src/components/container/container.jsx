import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Main = styled.main`
  padding: 30px 20px;
  margin: 0 auto;
  max-width: 1400px;
`;

export const Container = ({ children }) => {
  return <Main>{children}</Main>;
};

Container.propTypes = {
  'children': PropTypes.node.isRequired,
};
