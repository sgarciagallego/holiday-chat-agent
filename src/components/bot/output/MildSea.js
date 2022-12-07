import React from 'react'
import DestinationData from '../../../data/DestinationData'
import Card from '../../Card'

const MildSea = () => {
  const filterFour = DestinationData.filter(item => {
    return item.tempRating === "mild" && item.location === "sea"
  })
  
  return (
    <>
      {filterFour.map(item => {
        return (
          <Card
            key={item.id}
            item={item}
          />
        )
      })}
    </>
  )
}

export default MildSea