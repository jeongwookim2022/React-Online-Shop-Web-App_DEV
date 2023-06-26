import { Rings, Oval } from "react-loader-spinner";
import styled from "styled-components";

const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Loading() {
  return (
    <LoadingDiv>
      <Rings
        height="80"
        width="80"
        color="gold"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
      <h6>Loading...</h6>
    </LoadingDiv>
  );
}

export default Loading;
