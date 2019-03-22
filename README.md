# server-exercise-boiler

1. Install postgres, redis, node, heroku cli on your local machines
2. Install Postman and/or Insomnia REST
3. Fork this repository https://github.com/patrick-wittybunny/server-exercise-boiler
4. Create your own heroku app, after, in the 'Deploy' tab set Github as Deployment method and select the forked repository
5. In resources tab, in add-ons, add a postgres provision
6. Clone your repository and open, run **_npm install_**
7. Start coding in your **app.js** file, create directories or other files as you see fit as long as app.js file is the main file
8. To test, run **_node app.js_** and make a request to your api using postman/insomnia
9. To deploy in heroku, push your changes, then go to 'Deploy' tab, find 'Manual Deploy' and deploy the master branch, or 'Automatic Deploy' so the app will redeploy every push on the master branch
10. If you want to see logs of heroku, you can use the command **_heroku logs -t -a <heroku_app_nam>_**