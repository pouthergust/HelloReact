import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
width: 90px;
heigth: 90px;
border-radius: 5px;
background-image: ${(props) => props.photo};
background-size: cover;
`;

const ImageCard = ({ photo }) => {
  return <Card photo={photo}/>
};

export default ImageCard;
