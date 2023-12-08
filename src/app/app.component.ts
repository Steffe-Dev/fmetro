import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NavComponent, FooterComponent } from '@core'

@Component({
  standalone: true,
  imports: [RouterModule, NavComponent, FooterComponent],
  selector: 'fmetro-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Frans Metronome'
}
