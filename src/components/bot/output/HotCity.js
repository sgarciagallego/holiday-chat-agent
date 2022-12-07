import React from 'react'
import DestinationData from '../../../data/DestinationData'
import Card from '../../Card'

const HotCity = () => {
  const filterEight = DestinationData.filter(item => {
    return item.tempRating === "hot" && item.location === "city"
  })
  
  return (
    <>
      {filterEight.map(item => {
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

export default HotCity