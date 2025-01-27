// api.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://ezycty5pv8.execute-api.us-east-1.amazonaws.com/prod/items';

  async callApi(data?: any) {
    try {
      const response = await axios.post(this.apiUrl, data);
      return response.data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }
}