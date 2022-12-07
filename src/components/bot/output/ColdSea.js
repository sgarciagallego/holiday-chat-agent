import React from 'react'
import DestinationData from '../../../data/DestinationData'
import Card from '../../Card'

const ColdSea = () => {
  const filterOne = DestinationData.filter(item => {
    return item.tempRating === "cold" && item.location === "sea"
  })
  
  return (
    <>
      {filterOne.map(item => {
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

export default ColdSea