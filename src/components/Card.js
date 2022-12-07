import React from 'react'
import StarIcon from './icons/Star'
import MapIcon from './icons/Map'
import TempIcon from './icons/Temp'
import styled from 'styled-components'

const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 450px;
  max-width: 450px;
  height: 300px;
  padding: 10px;
  border-radius: 30px;
  background: #E0E0E0;
  -moz-box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  -webkit-box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  box-shadow:  20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  @media (max-width: 480px) {
    min-width: 300px;
    max-width: 300px;
  }
  img {
    z-index: 999;
    width: 100%;
    height: 165px;
    object-fit: cover;
    border-radius: 22px 22px 10px 10px;
  }
  .description {
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .name__rating {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h3 {
        font-size: 1.4em;
      }
      div > span:nth-child(1) {
        margin-right: 3px;
      }
    }
    .location__pricing {
      display: flex;
      justify-content: space-between;
      color: #666;
      font-size: 0.9em;
      p:nth-child(2) {
        text-align: right;
      }
    }
    .temp__terrain {
      margin-top: 25px;
      display: flex;
      justify-content: center;
      gap: 40px;
      div {
        text-transform: uppercase;
        letter-spacing: 3px;
        font-size: 0.8em;
      }
      div > span > svg {
        vertical-align: middle;
        margin-right: 5px;
      }
    }
  }
`

const Card = (props) => {
  return (
    <StyledCard>
      <img src={props.item.imgUrl} alt='a view of the hotel' />
      <div className='description'>
        <div className='name__rating'>
          <h3>{props.item.hotelName}</h3>
          <div>
            <span><StarIcon /></span>
            <span>{props.item.starRating}</span>
          </div>
        </div>
        <div className='location__pricing'>
          <p>{props.item.city}, {props.item.country}</p>
          <p>£<span>{props.item.pricePerNight}</span> / night</p>
        </div>
        <div className='temp__terrain'>
          <div>
            <span><TempIcon /></span>
            <span>{props.item.tempRating}</span>
          </div>
          <div>
            <span><MapIcon /></span>
            <span>{props.item.location}</span>
          </div>
        </div>
      </div>
    </StyledCard>
  )
}

export default Card