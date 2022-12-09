<div align="center">
  <img alt="Logo" src="https://raw.githubusercontent.com/sgarciagallego/v2/master/src/images/icon.svg" width="100">
</div>
<h1 align="center">Holiday Chat Agent</h1>
<p align="center">
  The Synoptic Project created by <a href="https://github.com/sgarciagallego" target="_blank">Sergio Garcia Gallego</a> as part of the <a href="https://www.bcs.org/develop-your-people/develop-your-team-or-organisation/digital-it-apprenticeships-for-your-team/offer-our-apprenticeships-standards/software-development-technician/" target="_blank">BCS Software Development Technician Apprenticeship</a>.
</p>
<p align="center">
  Preview of project available to try out at <a href="https://holiday-chat-agent.vercel.app/" target="_blank">holiday-chat-agent.vercel.app</a>.
</p>

## 🛠 Installation & Set Up

1. Clone this project locally

  ```sh
  git clone https://github.com/sgarciagallego/holiday-chat-agent.git
  ```

2. Navigate into the cloned directory in your local environment

  ```sh
  cd holiday-chat-agent/
  ```

3. Install dependencies

  ```sh
  npm i
  ```

4. Start the development environment

  ```sh
  npm start
  ```

## 🚀 Build & Run for Production

1. Generate a static production build

  ```sh
  npm run build
  ```

2. Preview the site as it will appear once deployed

  ```sh
  npm run serve
  ```

## 🚫 Known Limitations

There are only 2 questions regarding holiday preferences provided to the user before providing an output and result. If time was extended there would be more questions asked to the user implemented.

Some results based on customer preferences return empty, and therefore appear with no results. Feedback was to be provided but due to time constraints it could not be implemented.

Some would argue the use of buttons to answer agent questions are a limitation, but due to the data provided, I used my best judgment to implement buttons as the source to avoid issues with agent feedback.

The use of a local file to hold data is a limitation, and an API would be of better use to adjust data depending on what is available.

## 🔮 Future Improvements

The use of more questions to give a more customised customer result would be handy. Also, the implementation of a form to allow customers to book a specific hotel would be nice.

More enhanced UI to fit with the business design spec. The imaginary company I was prototyping this for was called First Holiday Ltd. and did not have a colour scheme I could reference to, so I opted for minimal colour and UI styling.

Storing chat conversations would be nice to implement for surveillance and testing purposes. 