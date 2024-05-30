   ⬇️src
        >assets 
        ⬇️components
            BackgroundImage.jsx
            Card.jsx
             CardSlider.jsx
            Header.jsx
             Navbar.jsx
             NotAvailable.jsx
             SelectGenre.jsx
             Slider.jsx

        ⬇️pages
             Entertain.jsx
             Login.jsx
             Movies.jsx
             Player.jsx
             Signup.jsx
             TVShows.jsx
             UserLiked.jsx

        ⬇️store
             index.js

        ⬇️utils
            constants.jsx
            firebase-config.jsx

        #App.css
        App.js
        #index.css
        index.js
       .gitignore
        package-lock.json
        package.json
        Readme.md
⬇️entertain-api ⬇️controllers Usercontrollers.js ⬇️models UserModel.js ⬇️Routes UserRoutes.js .env package-lock.json package.json server.js

Description: The application is an entertainment app where user can slect any movie ,tv shows to watch .There is a list web page where liked movies are can be added adn removed. User can check out movies on the basis of genres. If no movies available for genre selcted then message will be displayed that "not available for selected genre" .

Frontend: Html,Css ,JS ,React.js,styled-components ,react-icons ,react-redux/toolkit,firebase has been used

packages or Dependencies we installed are axios ,firebase ,styled-components , react-icons react-redux @reduxjs/toolkit ,react-router-dom.

Backend : backend is created by using mongo, express and node.js

Dependencies: npm i express cors mongoose nodemon dotenv

Application functionality with specific technologies Functionality: User had to signup at first then he can see the maini page of website where there are links for movies, TVshows and lists. Also he can select through genres and choose the shows and movies accordingly. He can like and those like one will be added into his mylist .If he want sto remove he can remove from that. Data is stored in the mongo db.

Reducers For handling the staes We had used reducer and use dispatch hook for dispatching the state for making the changes this work is done inside the index.js of store folder.

Express.js Api 's are handled by express we have create userControllers and routes for the same to hit the api,s . we had made get , post and put requests

server.js The main server file for the backend.

UserModel Usermodel has the model . where we have create the schema for the user .

utis->constant.jsx this contains some api's variable like its base_url .

utils->firebase-config.js Inside this ther e is the connection crated between the application and the firebase forstoring the user's login an signup details. here we can check that how many users are there logged-in or signed-up.

assets > assets coontiansthe images that has been used inside the application.

axios we have used axios for handling th erequests that are made for the api,s.



live-link: https://mern-entertainment-jf2lupmeh-priya-aryas-projects.vercel.app
