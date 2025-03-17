import React from 'react';
import Header from './Header';
import Form from './Form';
import Service from './Service';
import './App.css';

const services = [
  {
    title: 'Presentation Design',
    description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
  },
  {
    title: 'Graphic Design',
    description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
  },
  {
    title: 'Audio - Visual Production',
    description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
  },
  {
    title: 'Research & Analytics',
    description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
  },
  {
    title: 'Translation Services',
    description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
  },
  {
    title: 'Data Processing',
    description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <div className="services-container">
        {services.map((service, index) => (
          <Service key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  );
}

export default App;