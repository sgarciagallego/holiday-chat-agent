import React from 'react'
import DestinationData from '../../../data/DestinationData'
import Card from '../../Card'

export const ColdSea = () => {
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

export const ColdCity = () => {
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

export const ColdMountain = () => {
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

export const MildSea = () => {
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

export const MildCity = () => {
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

export const MildMountain = () => {
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

export const HotSea = () => {
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

export const HotCity = () => {
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

export const HotMountain = () => {
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