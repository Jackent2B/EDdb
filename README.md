<!-- ABOUT THE PROJECT -->
## About The Project

A platform for reviewing all the educational courses available on the internet and to draw comparison between courses offered by different sites, just like IMDb and cardekho but for courses, and recommend the best course to the user according to the user’s demand.

### Built With

Following are the frameworks/libraries that you need to install in your local machine to run the project: 

* [React.js](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)
* [Bootstrap](https://getbootstrap.com)

<!-- GETTING STARTED -->
## Getting Started

Following are the Instructions on setting up your project locally:

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
*  git config username
  ```sh
  git config --global user.name "username"
  ```
*  git config email
  ```sh
  git config --global user.email "user@mail.com"
  ```

### Installation

1. Get your Mongodb Atlas credentials [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_apac_india_search_core_brand_atlas_desktop&utm_term=mongodbatlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624347&adgroup=115749713263&gclid=Cj0KCQiAzfuNBhCGARIsAD1nu-9lU_JU7_daHFi7wtHLEazj8JBYdBEdl2iFcyKHKKUTMnrGqKQ6--EaArPHEALw_wcB)
2. Clone the repo
   ```sh
   git clone https://github.com/Jackent2B/EDdb.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```

4. Create a .env file and enter your credentials in it
   ```sh
   mongoURL='Your URL'
   JWT_TOKEN = 'Your JWT token'
   ```
5. Create a `dev.js` file inside config folder.

6.  Now create a module.exports object inside `dev.js` file and enter your credentials inside it.
   ```sh
   mongoURL='Your URL'
   JWT_TOKEN = 'Your JWT token'
   ```
   
### Running the application
Switch to the cloned repository using your terminal

1. Run Node.js server 
   ```sh
   npm start
   ```
Now, Switch on to the client folder in the second window of terminal,<br/>

2. Run React.js client 
   ```js
   npm start
   ```
   
<!-- Project Link -->
## Project Link

Project Link: [Code](https://github.com/Jackent2B/EDdb)

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [React Docs](https://reactjs.org/docs/getting-started.html)
* [MongoDB Docs](https://docs.mongodb.com/)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)
