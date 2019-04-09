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
    console.log(response)
    return response.json()
  } catch (error) {
    console.error(error);
  }
  return { sensors :"Could not get greeting from backend"};
};

const getInSensorsFromBackend = async () => {
  try {
    const url = `${baseURL}/api/insensors`
    console.log("Getting greeting from "+url)
    const response = await fetch(url);
    console.log(response)
    return response.json()
  } catch (error) {
    console.error(error);
  }
  return { insensors :"Could not get greeting from backend"};
};

const BackendGreeting = (props) => (
  <div><p>Backend says: {props.greeting}</p></div>
);

const BackendSensors = (props) => {
  if (props.sensors.length === 0){
    return <p>No data</p>
  }

  const vika = props.sensors[props.sensors.length - 1];
  // const moi = JSON.stringify(lista)
  // const hei=moi.split(",")
  // const teksti=hei[2]+"°C,"+hei[3]+"%"
  // const last=JSON.stringify(teksti)

  if (props.insensors.length ===0){
    return (
     <div><p>
     out: Temperature:{vika.temperature}°C, humidity:{vika.humidity}%
     in:No Data
      </p></div>
    )};
  const eka = props.insensors[props.insensors.length -1];
  return (
    <div><p>
    out: Temperature:{vika.temperature}°C, humidity:{vika.humidity}%
    in: Temperature:{eka.temperature}°C, humidity:{eka.humidity}%
     </p></div>
   )

};




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      greeting: "",
      sensors: [],
      insensors: []
    };
  }

  async componentWillMount() {
    const response = await getSensorsFromBackend();
    this.setState({sensors: response.results});
    const respons = await getInSensorsFromBackend();
    this.setState({insensors: respons.results});
  }

  render() {
    return (
      <BackendSensors sensors={this.state.sensors} insensors={this.state.insensors}/>
    ); 
  }
}


/****** DO NOT DELETE AFTER THIS LINE ******/

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
