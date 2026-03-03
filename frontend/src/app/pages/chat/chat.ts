import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LucideAngularModule, Send, User, Bot, FileText, ChevronRight, X, Copy, ExternalLink, Hash, Code2 } from 'lucide-angular';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  citations?: string[];
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat implements OnInit {
  readonly Send = Send;
  readonly User = User;
  readonly Bot = Bot;
  readonly FileText = FileText;
  readonly ChevronRight = ChevronRight;
  readonly X = X;
  readonly Copy = Copy;
  readonly ExternalLink = ExternalLink;
  readonly Hash = Hash;
  readonly Code2 = Code2;

  repoId: string | null = null;
  userInput: string = '';
  isTyping: boolean = false;
  
  // Drawer state
  isPreviewOpen: boolean = false;
  selectedFilePath: string | null = null;
  selectedFileContent: string = '';

  messages: Message[] = [
    {
      role: 'assistant',
      content: 'Hello! I have indexed the repository. How can I help you understand the architecture or code logic today?',
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.repoId = this.route.snapshot.paramMap.get('id');
  }

  sendMessage() {
    if (!this.userInput.trim()) return;

    const userMessage = this.userInput;
    this.messages.push({ role: 'user', content: userMessage });
    this.userInput = '';
    this.isTyping = true;

    // Simulate AI response
    setTimeout(() => {
      this.isTyping = false;
      this.messages.push({
        role: 'assistant',
        content: `Based on my analysis of the repository, I found that the core logic you're asking about is handled in the service layer. Specifically, it uses a modular approach where each domain has its own controller and service.`,
        citations: ['src/app.service.ts', 'src/repo/repo.controller.ts']
      });
    }, 1500);
  }

  openPreview(path: string) {
    this.selectedFilePath = path;
    // Mock file content
    this.selectedFileContent = `import { Injectable } from '@nestjs/common';\n\n@Injectable()\nexport class AppService {\n  getHello(): string {\n    return 'Hello World!';\n  }\n}`;
    this.isPreviewOpen = true;
  }

  closePreview() {
    this.isPreviewOpen = false;
  }
}
