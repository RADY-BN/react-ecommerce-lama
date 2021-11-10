import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import {
  Container,
  Arrow,
  Wrapper,
  Slide,
  Image,
  ImgContainer,
  InfoContainer,
  Desc,
  Title,
  Button,
} from "./slidel.element";
import { sliderItems } from "../../data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex > 1 ? 0 : slideIndex + 1);
    }
  };

  useEffect(() => {
    setTimeout(() => handleClick("right"), 5000);
  }, [slideIndex]);

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIos />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <div>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOW NOW</Button>
              </div>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIos />
      </Arrow>
    </Container>
  );
};

export default Slider;
