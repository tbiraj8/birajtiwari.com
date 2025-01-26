import { Component, OnInit } from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core'; // Import the library
import { ApiService } from '../../../service/api.service';
import { JsonPipe } from '@angular/common'; // Import JsonPipe

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [JsonPipe], // Add JsonPipe here
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  apiResponse: any; // Variable to store the API response
  isLoading = false; // Variable to track loading state
  errorMessage: string | null = null;
  constructor(private apiService: ApiService) {}
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
  async onButtonClick() {
    this.isLoading = true; // Show loading state
    this.errorMessage = null; // Reset error message

    try {
      this.apiResponse = await this.apiService.callApi(); // Call the API and store the response
      console.log('Response from API:', this.apiResponse);
    } catch (error) {
      console.error('Error calling API:', error);
      this.errorMessage = 'Failed to fetch data. Please try again.'; // Set error message
    } finally {
      this.isLoading = false; // Hide loading state
    }
  }
}