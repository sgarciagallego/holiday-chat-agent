import React from 'react'
import DestinationData from '../../../data/DestinationData'
import Card from '../../Card'

const MildCity = () => {
  const filterFive = DestinationData.filter(item => {
    return item.tempRating === "mild" && item.location === "city"
  })
  
  return (
    <>
      {filterFive.map(item => {
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

export default MildCity