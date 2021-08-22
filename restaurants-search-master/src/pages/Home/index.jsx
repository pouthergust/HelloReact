import React, { useState } from 'react';
// import Slider from "react-slick";
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

import { Card, RestaurantCard } from '../../components/index';
import { Wrapper, Container, Search, Logo, Map, CarouselTitle, Carousel } from './styles';


const Home = () => {
  const [ inputValue, setInputValue ] = useState('cachorro');

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do Restaurante" />
          <TextField
              label="Pesquisar Restaurantes"
              outlined
              // onTrailingIconSelect={() => this.setState({value: ''})}
              trailingIcon={<MaterialIcon role="button" icon="search"/>}
            ><Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)} />
            </TextField>
            <CarouselTitle>
              Na sua Área
            </CarouselTitle>
            <Carousel {...settings}>
              <Card photo={restaurante} title="Nome do restaurante" />
              <Card photo={restaurante} title="Nome do restaurante" />
              <Card photo={restaurante} title="Nome do restaurante" />
              <Card photo={restaurante} title="Nome do restaurante" />
              <Card photo={restaurante} title="Nome do restaurante" />
              <Card photo={restaurante} title="Nome do restaurante" />
              <Card photo={restaurante} title="Nome do restaurante" />
              <Card photo={restaurante} title="Nome do restaurante" />
            </Carousel>
        </Search>
        <RestaurantCard/>
      </Container>
      <Map/>
    </Wrapper>
  );
};

export default Home;
