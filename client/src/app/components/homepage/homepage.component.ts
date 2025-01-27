import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core'; // Import the library
import { ApiService } from '../../../service/api.service';
import { JsonPipe } from '@angular/common'; // Import JsonPipe
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  isLoading = false;
  
  constructor(private apiService: ApiService) {}

  async onSubmit() {
    this.isLoading = true;
    try {
      const response = await this.apiService.callApi(this.formData);
      console.log('Message sent:', response);
      // Reset form
      this.formData = {
        name: '',
        email: '',
        message: ''
      };
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message.');
    } finally {
      this.isLoading = false;
    }
  }
}