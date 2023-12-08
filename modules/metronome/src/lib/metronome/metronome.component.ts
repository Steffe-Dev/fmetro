import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NumberPickerComponent } from '../shared/number-picker/number-picker.component'
import { Howl, Howler } from 'howler'

@Component({
  selector: 'fmetro-metronome',
  standalone: true,
  imports: [CommonModule, NumberPickerComponent],
  templateUrl: './metronome.component.html',
  styleUrl: './metronome.component.scss',
})
export class MetronomeComponent implements OnInit {
  bpm = 90
  beats = 4
  divisions = 4
  isClicking = false
  interval = 0
  clickSound = '../../public/51_HazyClave_823'
  audio = new Howl({
    src: [this.clickSound + '.webm', this.clickSound + '.mp3'],
    preload: true,
  })

  ngOnInit(): void {
    Howler.volume(1)
  }

  updateBpm($event: number): void {
    this.bpm = $event
  }

  updateBeats($event: number): void {
    this.beats = $event
  }

  updateDivisions($event: number): void {
    this.divisions = $event
  }

  toggleMetronome(): void {
    this.isClicking = !this.isClicking
    if (this.isClicking) {
      console.log('metronome started')
      this.interval = setInterval(
        () => this.handleClick(),
        (this.bpm / 60) * 1000
      )
    } else {
      console.log('metronome stopped')
      clearInterval(this.interval)
    }
  }

  private handleClick() {
    this.audio.play()
    console.log(
      '%cHello metronome.component.ts line:42 click!',
      'background: green; color: white; display: block;'
    )
  }
}
