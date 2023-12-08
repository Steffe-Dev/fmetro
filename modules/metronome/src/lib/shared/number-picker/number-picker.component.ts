import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'fmetro-number-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './number-picker.component.html',
  styleUrl: './number-picker.component.scss',
})
export class NumberPickerComponent {
  @Input() value = 90
  @Input() componentDisabled = false
  @Output() change = new EventEmitter<number>()
  @Output() action = new EventEmitter<string>()

  increment(): void {
    this.value++
    this.change.emit(this.value)
  }

  decrement(): void {
    this.value--
    this.change.emit(this.value)
  }

  clickActionButton(): void {
    this.action.emit('CLICK')
  }
}
