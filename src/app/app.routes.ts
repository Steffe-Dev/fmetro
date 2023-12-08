import { Route } from '@angular/router'
import { MetronomeComponent } from '@fmetro/metronome'
import { HomeComponent } from './modules/home/home.component'

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'metronome',
    component: MetronomeComponent,
  },
]
