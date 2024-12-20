import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-chat-bot',
  standalone: true,
  imports: [],
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.scss'
})
export class ChatBotComponent implements OnInit {
  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Add the embeddedChatbotConfig script
      const script1 = this.renderer.createElement('script');
      script1.type = 'text/javascript';
      script1.text = `
        window.embeddedChatbotConfig = {
          chatbotId: "oYbdZhnwIdtu8YpIeloOp",
          domain: "www.chatbase.co"
        };
      `;
      this.renderer.appendChild(document.body, script1);

      // Add the Chatbase embed script
      const script2 = this.renderer.createElement('script');
      script2.src = 'https://www.chatbase.co/embed.min.js';
      script2.setAttribute('chatbotId', 'oYbdZhnwIdtu8YpIeloOp');
      script2.setAttribute('domain', 'www.chatbase.co');
      script2.defer = true;
      this.renderer.appendChild(document.body, script2);

      // Wait for the chatbot to render and apply styles
      script2.onload = () => {
        const interval = setInterval(() => {
          const chatButton = document.querySelector('#chatbase-bubble-button');
          if (chatButton) {
            this.renderer.setStyle(chatButton, 'box-shadow', '4px 4px 4px rgb(0, 195, 255)');
            this.renderer.setStyle(chatButton, 'border-radius', '50%');
            clearInterval(interval);
          }
        }, 100);
      };
    }
  }
}
