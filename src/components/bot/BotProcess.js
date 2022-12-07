import React from 'react'
import Chatbot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'

const config = {
  width: "400px",
  height: "500px",
  floating: true,
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
            id: 13,
            component: (
              <div>
                <p>You have chosen a cold environment by the sea.</p>
              </div>
            ),
            end: true,
          },
          {
            id: 14,
            component: (
              <div>
                <p>You have chosen a cold environment in the city.</p>
              </div>
            ),
            end: true,
          },
          {
            id: 15,
            component: (
              <div>
                <p>You have chosen a cold environment on a mountain.</p>
              </div>
            ),
            end: true,
          },
          {
            id: 16,
            component: (
              <div>
                <p>You have chosen a mild environment by the sea.</p>
              </div>
            ),
            end: true,
          },
          {
            id: 17,
            component: (
              <div>
                <p>You have chosen a mild environment in the city.</p>
              </div>
            ),
            end: true,
          },
          {
            id: 18,
            component: (
              <div>
                <p>You have chosen a mild environment on a mountain.</p>
              </div>
            ),
            end: true,
          },
          {
            id: 19,
            component: (
              <div>
                <p>You have chosen a hot environment by the sea.</p>
              </div>
            ),
            end: true,
          },
          {
            id: 20,
            component: (
              <div>
                <p>You have chosen a hot environment in the city.</p>
              </div>
            ),
            end: true,
          },
          {
            id: 21,
            component: (
              <div>
                <p>You have chosen a hot environment on a mountain.</p>
              </div>
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