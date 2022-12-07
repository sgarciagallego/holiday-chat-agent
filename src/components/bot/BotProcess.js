import React from 'react'
import Chatbot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import ColdSea from './output/ColdSea'
import ColdCity from './output/ColdCity'
import ColdMountain from './output/ColdMountain'
import MildSea from './output/MildSea'
import MildCity from './output/MildCity'
import MildMountain from './output/MildMountain'
import HotSea from './output/HotSea'
import HotCity from './output/HotCity'
import HotMountain from './output/HotMountain'

const config = {
  width: "100vw",
  height: "100vh",
}

const uniform = {
  background: "#e0e0e0",
  fontFamily: "Lexend Deca",
  botBubbleColor: "#656565",
  botFontColor: "#FDFDFD",
  userBubbleColor: "#1982FC",
  userFontColor: "#FDFDFD",
}

const BotProcess = () => {
  return (
    <ThemeProvider theme={uniform}>
      <Chatbot 
        steps={[
          {
            id: 1,
            message: "Hello! What's your name?",
            trigger: 2,
          },
          {
            id: 2,
            user: true,
            trigger: 3,
          },
          {
            id: 3,
            message: "Hi {previousValue}, nice to meet you!",
            trigger: 4,
          },
          {
            id: 4,
            message: "I am here to assist you in finding your next dream holiday. Please answer the following questions to unlock your next getaway...",
            trigger: 5,
          },
          {
            id: 5,
            message: "Would you prefer to travel to a cold, mild or hot environment?",
            trigger: 6,
          },
          {
            id: 6,
            options: [
              {value: "cold", label: "Cold", trigger: 7},
              {value: "mild", label: "Mild", trigger: 8},
              {value: "hot", label: "Hot", trigger: 9},
            ]
          },
          {
            // cold
            id: 7,
            message: "Would you prefer to be located by the sea, in the city, or on a mountain?",
            trigger: 10,
          },
          {
            // mild
            id: 8,
            message: "Would you prefer to be located by the sea, in the city, or on a mountain?",
            trigger: 11,
          },
          {
            // hot
            id: 9,
            message: "Would you prefer to be located by the sea, in the city, or on a mountain?",
            trigger: 12,
          },
          {
            id: 10,
            options: [
              // cold and sea
              {value: "sea", label: "Sea", trigger: 13},
              // cold and city
              {value: "city", label: "City", trigger: 14},
              // cold and mountain
              {value: "mountain", label: "Mountain", trigger: 15},
            ]
          },
          {
            id: 11,
            options: [
              // mild and sea
              {value: "sea", label: "Sea", trigger: 16},
              // mild and city
              {value: "city", label: "City", trigger: 17},
              // mild and mountain
              {value: "mountain", label: "Mountain", trigger:18},
            ]
          },
          {
            id: 12,
            options: [
              // hot and sea
              {value: "sea", label: "Sea", trigger: 19},
              // hot and city
              {value: "city", label: "City", trigger: 20},
              // hot and mountain
              {value: "mountain", label: "Mountain", trigger: 21},
            ]
          },
          {
            // cold and sea
            id: 13,
            message: "Here are all available hotels based on your preferences of a cold environment by the sea.",
            trigger: 22,
          },
          {
            // cold and city
            id: 14,
            message: "Here are all available hotels based on your preferences of a cold environment in the city.",
            trigger: 23,
          },
          {
            // cold and mountain
            id: 15,
            message: "Here are all available hotels based on your preferences of a cold environment on a mountain.",
            trigger: 24,
          },
          {
            // mild and sea
            id: 16,
            message: "Here are all available hotels based on your preferences of a mild environment by the sea.",
            trigger: 25,
          },
          {
            // mild and city
            id: 17,
            message: "Here are all available hotels based on your preferences of a mild environment in the city.",
            trigger: 26,
          },
          {
            // mild and mountain
            id: 18,
            message: "Here are all available hotels based on your preferences of a mild environment on a mountain.",
            trigger: 27,
          },
          {
            // hot and sea
            id: 19,
            message: "Here are all available hotels based on your preferences of a hot environment by the sea.",
            trigger: 28,
          },
          {
            // hot and city
            id: 20,
            message: "Here are all available hotels based on your preferences of a hot environment in the city.",
            trigger: 29,
          },
          {
            // hot and mountain
            id: 21,
            message: "Here are all available hotels based on your preferences of a hot environment on a mountain.",
            trigger: 30,
          },
          {
            id: 22,
            component: (
              <ColdSea />
            ),
            end: true,
          },
          {
            id: 23,
            component: (
              <ColdCity />
            ),
            end: true,
          },
          {
            id: 24,
            component: (
              <ColdMountain />
            ),
            end: true,
          },
          {
            id: 25,
            component: (
              <MildSea />
            ),
            end: true,
          },
          {
            id: 26,
            component: (
              <MildCity />
            ),
            end: true,
          },
          {
            id: 27,
            component: (
              <MildMountain />
            ),
            end: true,
          },
          {
            id: 28,
            component: (
              <HotSea />
            ),
            end: true,
          },
          {
            id: 29,
            component: (
              <HotCity />
            ),
            end: true,
          },
          {
            id: 30,
            component: (
              <HotMountain />
            ),
            end: true,
          },
        ]}
        {...config}
      />
    </ThemeProvider>
  )
}

export default BotProcess