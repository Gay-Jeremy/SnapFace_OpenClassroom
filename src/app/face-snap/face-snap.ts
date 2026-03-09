import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})

export class FaceSnap implements OnInit{

  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl! : string;

  ngOnInit(): void {
    this.title = "Archibald";
    this.description = "Mon meilleure amis pour toujours !"
    this.createdAt = new Date;
    this.snaps = 0;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
  }
}
