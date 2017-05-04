import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
//import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import NavList from './Components/NavList';
import Home from './Components/Home';
var Spinner = require('react-spinkit');



class App extends Component {
	constructor(){
		super();
		this.state = {
		  projects: [],
		  exercises: []
		}
	}

	 getProjects(){
    this.setState({projects: [
      {
        title: 'Home',
        link: '/'
      },
      {
        title: 'Exercise',
        link: 'exercise'
      },
       {
        title: 'Cars',
        link: 'cars'
      },
      {
        title: 'Exercise New',
        link: 'exercises'
      }
    ]});
  }

  getExercises(){
  	this.setState({exercises: [

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
]

  }
  )
}

	componentWillMount(){
    this.getProjects();
    this.getExercises();
  }

  componentDidMount(){
  	this.getProjects();
  	this.getExercises();
  }


	render() {
		return (
			 <div>
			 {this.props.children || <Home/>}
    	<NavList projects={this.state.projects} />
    	</div>
		);
	}
}

export default App;
