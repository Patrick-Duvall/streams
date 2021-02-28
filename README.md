# Streams 

Streams is a Restful Streaming application, similar to Twitch built based on [Steven Girder's React Class](https://www.udemy.com/course/react-redux/). Users can login with a client side google Oauth flow and have full crud functionality for a Streams resource. The project consists of 3 directories: apis -- a simple json-server mocking a backend, rtmpserver -- a server that creates streams from Open Broadcaster Software(OBS), and client -- the front-end code to be viewed in a web browser.

### Learning goals

1. Create a front end Oauth flow
2. Become more familliar with Redux
3. Make use of React Router


# api

The Api directory uses [json-server](https://github.com/typicode/json-server) as a fake backend. The client is configured to read and write from the db.json file in this directory. Managing the 'database' simply consists of editing db.json.

# rtmpserver

This is the rtmp server that allows [OBS](https://obsproject.com/welcome) to create streams on localhost port 8000. configuration is from [flv.js](https://github.com/Bilibili/flv.js/)

# client

This is the body of our application. It uses Redux and React router to RESTfuly implement CRUD functionality for Stream resources As a non-logged in user I can view any Stream. As user  logged in with Google Oauth I can create, edit, and destroy streams I have created. 

# Running locally

```
git clone https://github.com/Patrick-Duvall/streams.git
cd streams
```
From streams we need to run three processes: the client, the rtmp server, and the json-server, In each of the three directories, in different terminal windows, `client`, `rtmpserver`, and `api`, run `npm install; npm start` to start these processes.

- Navigate to http://localhost:3000
- Log in with Google Oauth 
- Create a stream.

Download the appropriate version of [OBS](https://obsproject.com/welcome). Inside the application create a stream then go to `Controls > Settings > Stream`

Set the following:
```
Service: Custom
Server: rtmp://localhost/live
Stream Key: The Id of a created stream in the client App.
```

Click `Start Streaming` in the OBS controls.

A stream of your desktop should be available in the streams/:id window of the browser where id is the stream key set in OBS.

