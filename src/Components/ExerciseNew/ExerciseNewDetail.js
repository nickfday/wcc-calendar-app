import React, { Component } from 'react';

class ExerciseNewDetail extends Component {
    render(){
        // Car array
        const exercises = this.props.route.data;
        // Car Id from param
        const id = this.props.params.id;

        // Filter car with ID
        const exercise = exercises.filter(exercise => {
            if(exercise.id == id) {
                return exercise;
            }
        });

        return (
            <div className="content exercise-detail container">
                <h1>{exercise[0].name}</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src={exercise[0].image} alt={exercise[0].image} width={200} height={100} />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                       <ul>
                           <li><strong>Primary Muscle</strong>: {exercise[0].primaryMuscle}</li>
                           <li><strong>Image</strong>: {exercise[0].image}</li>
                           <li><strong>Secondary Muscles</strong>: {exercise[0].secondaryMuscle}</li>
                           <li><strong>Equipment</strong>: {exercise[0].equipment}</li>
                       </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExerciseNewDetail;