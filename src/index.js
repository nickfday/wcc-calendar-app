import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App';
import './index.css';
import './App.css';
//import { Navbar, Jumbotron, Button, Navigation } from 'react-bootstrap';
import Workout from './Components/ToDoView';
import Home from './Components/Home';
import Footer from './Components/Footer';
import ExerciseList from './Components/Exercise/ExerciseList';
import ExerciseSingle from './Components/Exercise/ExerciseSingle';

import Car from './Components/Car/Car';
import CarDetail from './Components/Car/CarDetail';


const data = [
    {
        id: 1,
        name: 'Honda Accord Crosstour',
        year: '2010',
        model: 'Accord Crosstour',
        make: 'Honda',
        media: 'http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg',
        price: '$16,811'

    },
    {
        id: 2,
        name: 'Mercedes-Benz AMG GT Coupe',
        year: '2016',
        model: 'AMG',
        make: 'Mercedes Benz',
        media: 'http://media.ed.edmunds-media.com/mercedes-benz/amg-gt/2016/oem/2016_mercedes-benz_amg-gt_coupe_s_fq_oem_1_717.jpg',
        price: '$138,157'

    },
    {
        id: 3,
        name: 'BMW X6 SUV',
        year: '2016',
        model: 'X6',
        make: 'BMW',
        media: 'http://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_1_717.jpg',
        price: '$68,999'
    },
    {
        id: 4,
        name: 'Ford Edge SUV',
        year: '2016',
        model: 'Edge',
        make: 'Ford',
        media: 'http://media.ed.edmunds-media.com/ford/edge/2016/oem/2016_ford_edge_4dr-suv_sport_fq_oem_6_717.jpg',
        price: '$36,275'
    },
    {
        id: 5,
        name: 'Dodge Viper Coupe',
        year: '2017',
        model: 'Viper',
        make: 'Dodge',
        media: 'http://media.ed.edmunds-media.com/dodge/viper/2017/oem/2017_dodge_viper_coupe_acr_fq_oem_3_717.jpg',
        price: '$123,890'
    }
];



ReactDOM.render((
	<div>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
     	<Route path="/exercise" component={ExerciseList}/>
     	<Route path="/exercise/:id" component={ExerciseSingle} data={ExerciseList.todos} />
     	<Route path="/workout" component={Workout} />
     	<Route path="/813b0238-96f9x4db7-be0a-ca54f2c5c0df" component={ExerciseSingle}/>
     	<Route path="/test" component={ExerciseSingle} />
      {/* make them children of `App` */}
       <Route path="/cars" component={Car} data={data}/>
            {/* Parameter route*/}
       <Route path="/cars/:id" component={CarDetail} data={data}/>
    </Route>
  </Router>
  <Footer/>
  </div>
  ),
  document.getElementById('root')
);
