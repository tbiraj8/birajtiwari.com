import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://ezycty5pv8.execute-api.us-east-1.amazonaws.com/prod/items';

  constructor() {}

  // Function to call the API
  async callApi() {
    const options = {
      method: 'POST',
      url: this.apiUrl,
      headers: { 'content-type': 'application/json' },
      data: { message: 'Hello API', timestamp: '2024-01-25' },
    };

    try {
      const { data } = await axios.request(options);
      console.log('API Response:', data);
      return data; // Return the response data
    } catch (error) {
      console.error('API Error:', error);
      throw error; // Throw the error for handling in the component
    }
  }
}