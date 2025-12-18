import { Component, computed, input } from '@angular/core';
import { UILevel } from '../../types';

/**
 * A reusable button component with customizable levels.
 * Levels include 'primary', 'success', 'warning', 'secondary', and 'danger'.
 * By default, the button level is set to 'primary'.
 * 
 * @example
 * <app-button level="success">Click Here</app-button>
 */
@Component({
  selector: 'qui-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  // TODO : Centraliser les Types
  level = input<UILevel>('primary');
  css = computed(() =>  'btn-' + this.level());
}
