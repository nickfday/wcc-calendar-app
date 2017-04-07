import React, { Component } from 'react';
import $ from 'jquery';
import Exercise from './Exercise';


class ExerciseView extends Component {
	constructor(){
		super();
		this.state = {
			todos:[]
		}
	}

	getTodos(){
    $.ajax({
      url: 'http://fitnessremoted7.dev/api/rest/views/exercise.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

	componentWillMount(){
    this.getTodos();
  }

  componentDidMount(){
    this.getTodos();
  }

  render() {

  	return(
  		<div>
  		<Exercise todos={this.state.todos} />
  		</div>
  	)
  }


}

export default ExerciseView;


// import React, { Component } from 'react';
// import { Table } from 'reactstrap';

// class ExerciseItem extends Component {
// 	render() {
// 		return (
// 			<tbody>
// 				 <tr>
//             <td><img src="http://fitnessremoted7.dev/sites/default/files/stock-photo-48646366-bodybuilder-performing-dips.jpg" alt="" /></td>
//             <td>Bench Press</td>
//             <td>Chest</td>
//             <td>Triceps</td>
//             <td>Beginner</td>
//           </tr>
//           <tr>
//             <td><img src="http://fitnessremoted7.dev/sites/default/files/stock-photo-48646366-bodybuilder-performing-dips.jpg" alt="" /></td>
//             <td>Bench Press</td>
//             <td>Chest</td>
//             <td>Triceps</td>
//             <td>Beginner</td>
//           </tr>
// 			</tbody>
// 			)
// 	}
// }


// class ExerciseList extends Component {

//     render() {
//     return (
//     	<div className="content exercise-list">

//     	<Table responsive>
//         <thead>
//           <tr>
//             <th>Image</th>
//             <th>Name</th>
//             <th>Primary Muscle</th>
//             <th>Secondary Muscles</th>
//             <th>Equipment</th>
//           </tr>
//         </thead>

//        <ExerciseItem />

//       </Table>
//       </div>
//     );

// }
// }



// export default ExerciseList;