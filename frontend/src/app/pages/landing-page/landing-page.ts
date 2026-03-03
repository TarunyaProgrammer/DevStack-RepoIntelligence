import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LucideAngularModule, Github, Search, Cpu, MessageSquare, ArrowRight, Zap, Shield, Sparkles } from 'lucide-angular';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
  readonly Github = Github;
  readonly Search = Search;
  readonly Cpu = Cpu;
  readonly MessageSquare = MessageSquare;
  readonly ArrowRight = ArrowRight;
  readonly Zap = Zap;
  readonly Shield = Shield;
  readonly Sparkles = Sparkles;

  repoUrl: string = '';
  isAnalyzing: boolean = false;

  constructor(private router: Router) {}

  analyzeRepo() {
    if (!this.repoUrl) return;
    
    // In V1, we just simulate the navigation to indexing
    // The backend would actually handle this via a POST /repos
    this.isAnalyzing = true;
    
    // Mock ID for navigation
    const mockId = btoa(this.repoUrl).slice(0, 8);
    setTimeout(() => {
      this.router.navigate(['/indexing', mockId]);
    }, 500);
  }
}
