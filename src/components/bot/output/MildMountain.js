import React from 'react'
import DestinationData from '../../../data/DestinationData'
import Card from '../../Card'

const MildMountain = () => {
  const filterSix = DestinationData.filter(item => {
    return item.tempRating === "mild" && item.location === "mountain"
  })
  
  return (
    <>
      {filterSix.map(item => {
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

export default MildMountain