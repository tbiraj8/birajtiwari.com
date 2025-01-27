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
    try {
      await this.apiService.callApi(this.formData);
      this.formData = { name: '', email: '', message: '' };
    } catch (error) {
      console.error('Error:', error);
    }
  }
}