import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  z-index: 9999;
  position: absolute;
  bottom: 100px;

  button {
    box-shadow: 0px 0px 15px 5px rgba(255, 255, 255,0.1);
    cursor: pointer;
    border: 0;
    border-radius: 30px;
    padding: 8px 20px;
    background: #000;
    color: #FDFDFD;
    text-transform: uppercase;
    letter-spacing: 3px;
  }
`

const ReloadBtn = () => {
  function refresh() {
    window.location.reload(false)
  }

  return (
    <StyledDiv>
      <button onClick={refresh}>Search Again</button>
    </StyledDiv>
  )
}

export default ReloadBtn