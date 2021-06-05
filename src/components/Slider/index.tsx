import React, { useState } from 'react';

import { Wrapper, Container, Item } from './styles';

interface IProps {
    images: string[];
}

const Slider: React.FC<IProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const handleSlidePrev = () => {
      const lastIndex = images.length -1;
      current !== 0 ? setCurrent(current-1) : setCurrent(lastIndex);
  }

  const handleSlideNext = () => {
    const lastIndex = images.length -1;
      current !== lastIndex ? setCurrent(current+1) : setCurrent(0);
  }
  return (
      <Wrapper>
        <Container>
            <button onClick={handleSlidePrev}>
                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.67 1.77L9.9 0L0 9.9L9.9 19.8L11.67 18.03L3.54 9.9L11.67 1.77Z" fill="#D40054D40054"/>
                </svg>
            </button>
            { 
                images.map((item, index) => {
                    return (
                        <Item onClick={() => setCurrent(index)}
                            style={current === index ? {display: 'block'} : {display: 'none'}}
                        >
                            <img src={item} alt="" />
                        </Item>
                    )
                })
            }
            <button onClick={handleSlideNext}>
                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.0271879 18.0279L1.76978 19.8249L11.8207 10.0782L2.07405 0.0272061L0.277062 1.7698L8.28117 10.0238L0.0271879 18.0279Z" fill="#D40054D40054"/>
                </svg>
            </button>
        </Container>
        <div className="dots">
            {images.map((_, index) => {
                return <div className="dot" onClick={() => setCurrent(index)}
                            style={current === index ? {background: '#D40054'} : { background: '#ccc'}}
                        ></div>
            })
            }
        </div>
    </Wrapper>
  );
}

export default Slider;