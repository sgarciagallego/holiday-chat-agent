import React from 'react'
import DestinationData from '../../../data/DestinationData'
import Card from '../../Card'

const HotSea = () => {
  const filterSeven = DestinationData.filter(item => {
    return item.tempRating === "hot" && item.location === "sea"
  })
  
  return (
    <>
      {filterSeven.map(item => {
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

export default HotSea