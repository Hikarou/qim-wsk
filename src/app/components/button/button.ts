import { Component, computed, input, signal } from '@angular/core';

/**
 * A reusable button component with customizable levels.
 * Levels include 'primary', 'success', 'warning', 'secondary', and 'danger'.
 * By default, the button level is set to 'primary'.
 * 
 * @example
 * <app-button level="success">Click Here</app-button>
 */
@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  level = input<'primary' | 'success' | 'warning' | 'secondary' | 'danger'>('primary');
  css = computed(() =>  'btn-' + this.level());
}
