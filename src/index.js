import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App';
import './index.css';
import './App.css';
//import { Navbar, Jumbotron, Button, Navigation } from 'react-bootstrap';
import Home from './Components/Home';
import Footer from './Components/Footer';
import ExerciseList from './Components/Exercise/ExerciseList';
import ExerciseSingle from './Components/Exercise/ExerciseSingle';

import Car from './Components/Car/Car';
import CarDetail from './Components/Car/CarDetail';

import ExerciseNewSummary from './Components/ExerciseNew/ExerciseNewSummary';
import ExerciseNewDetail from './Components/ExerciseNew/ExerciseNewDetail';

import ExerciseGetJson from './Components/ExerciseNew/ExerciseGetJson';
import FetchDemo from './Components/ExerciseNew/FetchDemo';




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

const exerciseData = [
    {
        id: 1,
        name: 'Bench Press',
        primaryMuscle: 'Chest',
        secondaryMuscle: 'Tricep',
        image: 'http://fitnessremoted7.dev/sites/default/files/bench-nick.jpg',
        video: 'https://www.youtube.com/embed/hM39cRa8uu8',
        equipment: 'Barbell, Bench',
        instructions : 'Lie back on an incline bench. Using a medium-width grip (a grip that creates a 90-degree angle in the middle of the movement between the forearms and the upper arms), lift the bar from the rack and hold it straight over you with your arms locked. This will be your starting position. As you breathe in, come down slowly until you feel the bar on you upper chest. After a second pause, bring the bar back to the starting position as you breathe out and push the bar using your chest muscles. Lock your arms in the contracted position, squeeze your chest, hold for a second and then start coming down slowly again. Tip: it should take at least twice as long to go down than to come up. Repeat the movement for the prescribed amount of repetitions. When you are done, place the bar back in the rack.',
        facts: 'World record is 335 kg',
        alternativeExercises: 'Incline Bench Press, Dumbell Press' ,
        relatedArticles: 'Boost your Bench',
        body: 'The bench press is an upper body strength training exercise that consists of pressing a weight upwards from a supine position. The exercise works the pectoralis major as well as supporting chest, arm, and shoulder muscles like the anterior deltoids, serratus anterior, coracobrachialis, scapulae fixers, trapezii, and the triceps. A barbell is generally used to hold the weight, but a pair of dumbbells can also be used.[1] The barbell bench press is one of three lifts in the sport of powerlifting and is used extensively in weight training, bodybuilding, and other types of lifting fitness training to develop the chest muscles.'
    },
    {
        id: 2,
        name: 'Deadlift',
        primaryMuscle: 'Back',
        secondaryMuscle: 'Biceps',
        image: 'http://fitnessremoted7.dev/sites/default/files/bench-nick.jpg',
        equipment: 'Barbell'
    },
    {
        id: 3,
        name: 'Squat',
        primaryMuscle: 'Quads',
        secondaryMuscle: 'Hamstrings',
        image: 'http://fitnessremoted7.dev/sites/default/files/bench-nick.jpg',
        equipment: 'Rack, Barbell'
    }
];


ReactDOM.render((
	<div>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
     	<Route path="/exercise" component={ExerciseList}/>
     	<Route path="/exercise/:id" component={ExerciseSingle} data={ExerciseList.todos} />
     	<Route path="/813b0238-96f9x4db7-be0a-ca54f2c5c0df" component={ExerciseSingle}/>
     	<Route path="/test" component={ExerciseSingle} />
      {/* make them children of `App` */}
       <Route path="/cars" component={Car} data={data}/>
            {/* Parameter route*/}
       <Route path="/cars/:id" component={CarDetail} data={data}/>

       {/*<Route path="/exercisenew" component={ExerciseNew} data={exerciseData}/> */}
       <Route path="/exercises" component={ExerciseNewSummary} data={exerciseData}/>
       <Route path="/exercises/:id" component={ExerciseNewDetail} data={exerciseData}/>
    </Route>
  </Router>
  <Footer/>

  </div>
  ),
  document.getElementById('root')
);
