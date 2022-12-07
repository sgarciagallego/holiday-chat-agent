import React from 'react'
import DestinationData from '../../../data/DestinationData'
import Card from '../../Card'

const HotMountain = () => {
  const filterNine = DestinationData.filter(item => {
    return item.tempRating === "hot" && item.location === "mountain"
  })
  
  return (
    <>
      {filterNine.map(item => {
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

export default HotMountain