import { Component } from '@angular/core';

interface Rep {
  count: number;
  comment: string;
}

interface Workout {
  name: string;
  reps: Rep[];
}

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent {
  selectedExercise: string = '';
  selectedExerciseName: string = '';
  exercises: string[] = ['Push Up', 'Pull Up', 'Squat', 'Bench Press', 'Deadlift'];
  workouts: Workout[] = [];

  addWorkout() {
    if (this.selectedExercise || this.selectedExerciseName) {
      const workoutName = this.selectedExercise || this.selectedExerciseName;
      this.workouts.push({ name: workoutName, reps: [] });
      this.selectedExercise = '';
      this.selectedExerciseName = '';
    }
  }

  addRep(workout: Workout) {
    workout.reps.push({ count: 0, comment: '' });
  }

  removeRep(workout: Workout, index: number) {
    workout.reps.splice(index, 1);
  }
}
