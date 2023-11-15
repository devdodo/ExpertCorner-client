import React from 'react'
import styled, { keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const SpinnerMini = styled(BiLoaderAlt)`
  width: 1.5rem;
  height: 1.5rem;
  animation: ${rotate} 1.5s infinite linear;
`;

const Loader = () => {
    return (
        <div>
            <SpinnerMini />
        </div>
    )
}

export default Loader;