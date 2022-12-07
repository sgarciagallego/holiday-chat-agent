import React from 'react'
import StarIcon from './icons/Star'
import MapIcon from './icons/Map'
import TempIcon from './icons/Temp'
import styled from 'styled-components'

const Card = styled.article`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 350px;
  padding: 10px;
  border-radius: 15px;
  background: #E0E0E0;
  -moz-box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  -webkit-box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  box-shadow:  20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  img {
    width: 100%;
    height: 165px;
    object-fit: cover;
    border-radius: 8px;
  }
  p:first-child {
    margin-top: 15px;
  }
  p:nth-last-child(2) {
    color: rgb(75, 75, 75);
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 3px;
    span {
      font-weight: 500;
    }
  }
`

const SplitTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  h3 {
    font-size: 1.4em;
  }
  [role='doc-subtitle'] {
    display: flex;
    align-items: center;
    gap: 2px;
  }
`

const SplitBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  div {
    display: flex;
    box-align: center;
    -webkit-box-align: center;
    align-items: center;
    gap: 3px;
  }
  div > span {
    color: rgb(75, 75, 75);
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`

const DestinationCard = (props) => {
  return (
    <Card>
      <img src={props.item.imgUrl} alt='a view of the hotel' />
      <SplitTop>
        <h3>{props.item.hotelName}</h3>
        <div role='doc-subtitle'>
          <span><StarIcon /></span>
          <span>{props.item.starRating}</span>
        </div>
      </SplitTop>
      <p>{props.item.city}, {props.item.country}</p>
      <p>£<span>{props.item.pricePerNight}</span> / night</p>
      <SplitBottom>
        <div>
          <span><TempIcon /></span>
          <span>{props.item.tempRating}</span>
        </div>
        <div>
          <span><MapIcon /></span>
          <span>{props.item.location}</span>
        </div>
      </SplitBottom>
    </Card>
  )
}

export default DestinationCard