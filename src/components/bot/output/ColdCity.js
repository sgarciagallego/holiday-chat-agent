import React from 'react'
import DestinationData from '../../../data/DestinationData'
import Card from '../../Card'

const ColdCity = () => {
  const filterTwo = DestinationData.filter(item => {
    return item.tempRating === "cold" && item.location === "city"
  })
  
  return (
    <>
      {filterTwo.map(item => {
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

export default ColdCity