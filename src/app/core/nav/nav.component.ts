import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatToolbarModule } from '@angular/material/toolbar'
import { NavService } from './nav.service'

@Component({
  selector: 'fmetro-nav',
  standalone: true,
  imports: [CommonModule, MatToolbarModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  constructor(public navService: NavService) {}
}
