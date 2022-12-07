import React from 'react'
import DestinationCard from './DestinationCard'
import Data from '../data/DestinationData'
import styled from 'styled-components'

const Section = styled.section`
  max-width: 100vw;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  margin: 70px 0;
  padding: 20px 0;
`

const DestinationContainer = () => {
  const card = Data.map(item => {
    return (
      <DestinationCard
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <Section>
      {card}
    </Section>
  )
}

export default DestinationContainer