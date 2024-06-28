// src/app/services/workout.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getWorkouts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/workouts`);
  }

  getExercises(): Observable<any> {
    return this.http.get(`${this.apiUrl}/exercises`);
  }

  addWorkout(workout: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/workouts`, workout);
  }

  deleteWorkout(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/workouts/${id}`);
  }

  // Add more methods as needed for CRUD operations
}
