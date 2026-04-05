import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  readonly regions = ['North Region', 'South Region', 'East Region', 'West Region'];
  readonly timeframes = ['1 month', '3 months', '6 months'];

  selectedRegion = this.regions[0];
  selectedTimeframe = this.timeframes[0];
  riskScore = signal(0);
  riskLevel = signal('Low');

  generatePrediction() {
    const score = Math.floor(Math.random() * 101);
    this.riskScore.set(score);

    let level = 'Low';
    if (score > 70) level = 'High';
    else if (score > 35) level = 'Moderate';

    this.riskLevel.set(level);
  }
}
