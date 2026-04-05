import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-sources',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-sources.component.html',
  styleUrls: ['./data-sources.component.css']
})
export class DataSourcesComponent {
  datasets = [
    { title: 'Food Price Index', description: 'Tracks food affordability trends and inflationary pressure.' },
    { title: 'Rainfall Data', description: 'Shows precipitation patterns and drought risk by region.' },
    { title: 'Unemployment Rates', description: 'Measures economic stress that can drive food insecurity.' },
    { title: 'Global Oil Prices', description: 'Impacts transport & supply costs, affecting food distribution.' }
  ];
}
