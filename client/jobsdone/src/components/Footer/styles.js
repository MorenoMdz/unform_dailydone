import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background: #222;
  height: 70px;

  span {
    position: relative;
    top: 25px;
    margin-right: 20px;
    font-weight: 800;
    text-transform: capitalize;
    color: #fff;
    z-index: 2;
    direction: ltr;
  }
  div {
    direction: rtl;
  }
  @media (max-width: 599px) {
    width: 100vw;
  }
`;

export const MetaBar = styled.div`
  width: 500px;
  height: 30px;
  background: rgb(143, 76, 13);
  background: linear-gradient(to right, #e5405e 0%, #ffdb3a 25%, #3fffa2 50%, #3fffa2 50%, #1a9be0 73%, #ba68ed 100%);

  @media (max-width: 499px) {
    width: 280px;
  }
`;

export const OverlapBar = styled.div`
  border-right: 2px white solid;
  position: relative;
  top: -30px;
  width: ${props => `${props.width}px`};
  height: 30px;
  background: #222;
`;
