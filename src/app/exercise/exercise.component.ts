// src/app/components/exercise/exercise.component.ts
import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../services/workout.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  workouts: any[] = [];
  exercises: any[] = [];
  selectedExercise: string = '';
  selectedExerciseName: string = '';

  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void {
    this.loadWorkouts();
    this.loadExercises();
  }

  loadWorkouts(): void {
    this.workoutService.getWorkouts().subscribe((data: any[]) => {
      this.workouts = data;
    });
  }

  loadExercises(): void {
    this.workoutService.getExercises().subscribe((data: any[]) => {
      this.exercises = data;
    });
  }

  addWorkout(): void {
    const newWorkout = {
      name: this.selectedExerciseName,
      date: new Date().toLocaleDateString(),
      exercises: []
    };
    this.workoutService.addWorkout(newWorkout).subscribe((data: any) => {
      this.workouts.push(data);
    });
  }

  addRep(workout: any): void {
    workout.exercises.push({ name: this.selectedExercise, count: 0, comment: '' });
  }

  removeRep(workout: any, index: number): void {
    workout.exercises.splice(index, 1);
  }

  removeWorkout(workout: any, index: number): void {
    this.workoutService.deleteWorkout(workout.id).subscribe(() => {
      this.workouts.splice(index, 1);
    });
  }
}
