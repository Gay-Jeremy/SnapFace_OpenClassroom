import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snaps';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})

export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap

  buttonTitle!: string;
  isSnapped!: boolean;

  ngOnInit(): void {
    
    this.isSnapped = false;
    this.buttonTitle = "Oh Snap"
  }

  onSnap(): void {
      if (this.isSnapped) {
        this.unSnap();
      } else {
        this.snap();
      }
    }

  unSnap() {
      this.faceSnap.removeSnap();
      this.buttonTitle = 'Oh Snap!';
      this.isSnapped = false;
  }

  snap() {
      this.faceSnap.addSnap();
      this.buttonTitle = 'Oops, unSnap!';
      this.isSnapped = true;
}

}
export { FaceSnap };

