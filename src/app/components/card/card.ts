import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  title = input.required<CardItem['title']>();
  description = input.required<CardItem['description']>();
  imageUrl = input.required<CardItem['url']>();
}

export interface CardItem {
  id: string;
  title: Capitalize<string>;
  description: string;
  url: `${ 'http' | 'https' }://${string}`;
} 