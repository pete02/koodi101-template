/******** DO NOT DELETE THESE LINES ********/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './assets/stylesheets/style.css'

const baseURL = process.env.ENDPOINT;

/****** ADD YOUR CODE AFTER THIS LINE ******/

const getGreetingFromBackend = async () => {
  try {
    const url = `${baseURL}/api/greeting`
    console.log("Getting greeting from "+url)
    const response = await fetch(url);
    return response.json()
  } catch (error) {
    console.error(error);
  }
  return { greeting :"Could not get greeting from backend"};
};

const getSensorsFromBackend = async () => {
  try {
    const url = `${baseURL}/api/sensors`
    console.log("Getting greeting from "+url)
    const response = await fetch(url);
    return response.json()
  } catch (error) {
    console.error(error);
  }
  return { sensors :"Could not get greeting from backend"};
};


const BackendGreeting = (props) => (
  <div><p>Backend says: {props.greeting}</p></div>
);

const BackendSensors = (props) => {
  const lista = props.sensors.length ? props.sensors[props.sensors.length - 1] : null;
  const last = JSON.stringify(lista)
  return (
  <div><p>Last data: {last}</p></div>
)};


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      greeting: "",
      sensors: []
    };
  }

  async componentWillMount() {
    const response = await getSensorsFromBackend();
    this.setState({sensors: response.results});
  }

  render() {
    return (
      <BackendSensors sensors={this.state.sensors} />
    );
  }
}


/****** DO NOT DELETE AFTER THIS LINE ******/

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
