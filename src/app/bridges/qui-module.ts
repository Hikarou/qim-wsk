import { NgModule } from '@angular/core';
import * as Quis from '@dev/qui';

export type { CardItem } from '@dev/qui';

@NgModule({
  imports:[
    Quis.Button,
    Quis.Card,
    Quis.Footer,
    Quis.Header,
    Quis.LogoComponent,
    Quis.Main,
    Quis.Section
  ],
  exports: [
    Quis.Button,
    Quis.Card,
    Quis.Footer,
    Quis.Header,
    Quis.LogoComponent,
    Quis.Main,
    Quis.Section
  ]
})
export class QuiModule { }
