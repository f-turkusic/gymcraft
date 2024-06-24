import { Component, Input } from '@angular/core';
import { Exercise } from '../exercise/exercise.model';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss']
})
export class SetComponent {
  @Input() exercise!: Exercise;

  // Optional: Add functionality to edit or delete sets
}
