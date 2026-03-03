import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { LucideAngularModule, Loader2, CheckCircle2, Circle, Clock, AlertCircle, FileCode, Database, Terminal } from 'lucide-angular';

@Component({
  selector: 'app-indexing-status',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './indexing-status.html',
  styleUrl: './indexing-status.css',
})
export class IndexingStatus implements OnInit {
  readonly Loader2 = Loader2;
  readonly CheckCircle2 = CheckCircle2;
  readonly Circle = Circle;
  readonly Clock = Clock;
  readonly AlertCircle = AlertCircle;
  readonly FileCode = FileCode;
  readonly Database = Database;
  readonly Terminal = Terminal;

  repoId: string | null = null;
  overallProgress: number = 0;
  status: 'indexing' | 'ready' | 'error' = 'indexing';

  steps = [
    { title: 'Downloading Repository', status: 'pending', icon: Terminal },
    { title: 'Filtering Source Files', status: 'pending', icon: FileCode },
    { title: 'Generating Vector Chunks', status: 'pending', icon: Database },
    { title: 'Indexing to Vector DB', status: 'pending', icon: CheckCircle2 },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.repoId = this.route.snapshot.paramMap.get('id');
    this.simulateProgress();
  }

  simulateProgress() {
    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < this.steps.length) {
        this.steps[currentStep].status = 'processing';
        this.overallProgress += 5;
        
        if (this.overallProgress >= (currentStep + 1) * 25) {
          this.steps[currentStep].status = 'completed';
          currentStep++;
        }
      } else {
        clearInterval(interval);
        this.status = 'ready';
        this.overallProgress = 100;
      }
    }, 300);
  }

  startChat() {
    this.router.navigate(['/chat', this.repoId]);
  }
}
