import React, { useState } from 'react';

import { Wrapper, Container, Item } from './styles';

const Slider: React.FC = () => {
  const [current, setCurrent] = useState(1);

  const handleSlidePrev = () => {
      current != 1 ? setCurrent(current-1) : setCurrent(6);
  }

  const handleSlideNext = () => {
      current != 6 ? setCurrent(current+1) : setCurrent(1);
  }
  return (
      <Wrapper>
        <Container>
            <button onClick={handleSlidePrev}>
                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.67 1.77L9.9 0L0 9.9L9.9 19.8L11.67 18.03L3.54 9.9L11.67 1.77Z" fill="#D40054D40054"/>
                </svg>
            </button>
            <Item onClick={() => setCurrent(1)}
                style={current == 1 ? {display: 'block'} : {display: 'none'}}
            >
                <img src="https://s3-sa-east-1.amazonaws.com/medcel.static/images/afya/unidades-logos/logos-2021/fmit.svg" alt="" />
            </Item>
            <Item onClick={() => setCurrent(2)}
                style={current == 2 ? {display: 'block'} : {display: 'none'}}
            >
                <img src="https://s3-sa-east-1.amazonaws.com/medcel.static/images/afya/unidades-logos/logos-2021/sao_lucas_paranaji.svg" alt="" />
            </Item>
            <Item onClick={() => setCurrent(3)}
                style={current == 3 ? {display: 'block'} : {display: 'none'}}
            >
                <img src="https://s3-sa-east-1.amazonaws.com/medcel.static/images/afya/unidades-logos/logos-2021/uniptan.svg" alt="" />
            </Item>
            <Item onClick={() => setCurrent(4)}
                style={current == 4 ? {display: 'block'} : {display: 'none'}}
            >
                <img src="https://s3-sa-east-1.amazonaws.com/medcel.static/images/afya/unidades-logos/logos-2021/iesvap.svg" alt="" />
            </Item>
            <Item onClick={() => setCurrent(5)}
                style={current == 5 ? {display: 'block'} : {display: 'none'}}
            >
                <img src="https://s3-sa-east-1.amazonaws.com/medcel.static/images/afya/unidades-logos/logos-2021/medcel.svg" alt="" />
            </Item>
            <Item onClick={() => setCurrent(6)}
                style={current == 6 ? {display: 'block'} : {display: 'none'}}
            >
                <img src="https://s3-sa-east-1.amazonaws.com/medcel.static/images/afya/unidades-logos/logos-2021/ipemed.svg" alt="" />
            </Item>
            <button onClick={handleSlideNext}>
                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.0271879 18.0279L1.76978 19.8249L11.8207 10.0782L2.07405 0.0272061L0.277062 1.7698L8.28117 10.0238L0.0271879 18.0279Z" fill="#D40054D40054"/>
                </svg>
            </button>
        </Container>
        <div className="dots">
            <div className="dot" onClick={() => setCurrent(1)}
                style={current == 1 ? {background: '#D40054'} : { background: '#ccc'}}
            ></div>
            <div className="dot" onClick={() => setCurrent(2)}
                style={current == 2 ? {background: '#D40054'} : { background: '#ccc'}}
            ></div>
            <div className="dot" onClick={() => setCurrent(3)}
                style={current == 3 ? {background: '#D40054'} : { background: '#ccc'}}
            ></div>
            <div className="dot" onClick={() => setCurrent(4)}
                style={current == 4 ? {background: '#D40054'} : { background: '#ccc'}}
            ></div>
            <div className="dot" onClick={() => setCurrent(5)}
                style={current == 5 ? {background: '#D40054'} : { background: '#ccc'}}
            ></div>
            <div className="dot" onClick={() => setCurrent(6)}
                style={current == 6 ? {background: '#D40054'} : { background: '#ccc'}}
            ></div>
        </div>
    </Wrapper>
  );
}

export default Slider;