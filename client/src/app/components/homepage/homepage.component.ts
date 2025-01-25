import { Component, OnInit } from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core'; // Import the library

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  ngOnInit(): void {
    const typewriter = new Typewriter('#typewriter', {
      loop: true,
      delay: 75,
    });

    typewriter
      .typeString('Innovative Software Engineer')
      .pauseFor(1000)
      .deleteAll()
      .typeString('Cloud Enthusiast')
      .pauseFor(1000)
      .deleteAll()
      .typeString('Problem Solver')
      .pauseFor(1000)
      .start();
  }
}