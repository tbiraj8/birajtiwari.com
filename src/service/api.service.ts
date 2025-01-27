import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://dh5yl59v4a.execute-api.us-east-1.amazonaws.com/prod/contact';

  async callApi(data: any) {
    return await axios.post(this.apiUrl, data);
  }
}