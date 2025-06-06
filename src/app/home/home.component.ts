import { Component } from '@angular/core';
// biome-ignore lint/style/useImportType: <explanation>
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}

  redirectToConverter(route: string) {
    this.router.navigate([route]);
  }
}
