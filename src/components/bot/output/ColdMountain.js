import React from 'react'
import DestinationData from '../../../data/DestinationData'
import '../../../index.css'
import Card from '../../Card'

const ColdMountain = () => {
  const filterThree = DestinationData.filter(item => {
    return item.tempRating === "cold" && item.location === "mountain"
  })
  
  return (
    <>
      {filterThree.map(item => {
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

export default ColdMountain