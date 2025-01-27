import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'] // Corrected property name
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('chatMessages') private chatMessagesContainer!: ElementRef;

  userInput = '';
  messages: Message[] = [];
  isLoading = false; // Add loading state

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Initialize with a welcome message from the bot
    this.addBotMessage('Hello! How can I assist you today?');
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  sendMessage(): void {
    if (this.userInput.trim() === '') return;

    // Add user message to the chat
    this.addUserMessage(this.userInput);

    // Show loading state
    this.isLoading = true;

    // Call the DeepSeek API
    this.callDeepSeekAPI(this.userInput).subscribe({
      next: (response: any) => {
        // Add bot response to the chat
        this.addBotMessage(response.message);
      },
      error: (error) => {
        console.error('Error calling DeepSeek API:', error);
        this.addBotMessage('Sorry, something went wrong. Please try again.');
      },
      complete: () => {
        this.isLoading = false; // Hide loading state
      }
    });

    // Clear the input field
    this.userInput = '';
  }

  addUserMessage(text: string): void {
    this.messages.push({ text, sender: 'user', timestamp: new Date() });
  }

  addBotMessage(text: string): void {
    this.messages.push({ text, sender: 'bot', timestamp: new Date() });
  }

  scrollToBottom(): void {
    try {
      this.chatMessagesContainer.nativeElement.scrollTop = this.chatMessagesContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Error scrolling to bottom:', err);
    }
  }

  callDeepSeekAPI(userInput: string) {
    const apiUrl = 'https://api.deepseek.com/chat'; // Replace with the actual DeepSeek API endpoint
    const payload = {
      message: userInput
    };

    return this.http.post(apiUrl, payload);
  }
}