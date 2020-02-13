![Preview](https://github.com/dhruv-m-patel/react-chat-app/blob/master/React_Chat_App.png)

# react-chat-app

A chat app built with React and Pusher's ChatKit

![CI Status](https://github.com/dhruv-m-patel/react-chat-app/workflows/Continuous%20Integration/badge.svg)

### Setup

```
$ git clone git@github.com:dhruv-m-patel/react-chat-app.git
$ npm install
$ cp .env.example .env
```

- You will need to register for a [Pusher](https://dash.pusher.com/) account first to be able to run this app.
- Once you create your pusher account and login, you can create a Chatkit instance with your desired name.
- Open `Credentials` tab, and do as following:
  - Copy value for the Instance Locator to `PUSHER_CHATKIT_INSTANCE_LOCATOR` in the `.env` file
  - Enable test token provider
  - Copy test token provider endpoint value into `PUSHER_CHATKIT_AUTH_TOKEN` on the `.env` file
- Open `Console` tab
  - Create 2 users named `sender` and `receiver`
  - Create a room with your desired name and add some messages
  - Set `PUSHER_CHATKIT_RECEIVER_USER` to be `receiver` in `.env` file

Now run `npm start` and visit `http://localhost:3000`

### Made with:

- [@dhruv-m-patel/react-app](https://github.com/dhruv-m-patel/react-app)
