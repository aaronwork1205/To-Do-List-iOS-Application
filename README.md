# CS_8803_MAS_fall2023
# To-do-list (Task Manager) app
**Authors:** Hanqi Hua, Wenhao Wang


## Project Introduction
This is the front-end part of our task manager app for CS 8803 MAS. We mainly use React Native in this front-end development. <br>

In this app, users can register an account for themselves and log-in and log-out of the account. Once they log-in, they’ll be able to create, read, update, and delete their to-do-lists by typing the task name, its respective time and location. We also integrate a third-party map APIs so that when users click one of the items in their to-do-list, they can see where the events happen on the map based on what they typed in on the location field. The backend is used to respond responses when users register new accounts and log-in with existing accounts. It also responds to requests sent by users when they want to create, read, update, and delete tasks in their To-do List. All the data changes will be reflected in our MongoDB database if they’re properly requested. 

The backend of our app is here: https://github.com/huahanqi/CS8803-task-manager-backend


## Project Setup

Run this command to start running our app

```bash
npm install && npx expo start
```
Then hit i to start an simulator. 
You can also download expo go app, scan the QR code generated in the terminal, and run our app on your phone. 


## Reference
We learned how to create mobile app with React Native from this tutorial: https://www.youtube.com/watch?v=Jyj-50T4MqQ&list=PLgjw1dR712joAlRdIc6BMNhX6_hrsL7kE <br>
and use its front-end code as the starting point for our To-do-list App. 
