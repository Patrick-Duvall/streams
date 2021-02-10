import React from 'react'

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '112191001931-3ccgjmalqd9h7r42njmi4bttpdpdbabc.apps.googleusercontent.com',
        scope: 'email'
      })
    });
  }


  render() {
    return <div>Google Auth</div>
  }
}

export default GoogleAuth