import { Component, inject } from '@angular/core';
import { Button } from "../../components/button/button";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Button],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage {
  /*
  constructor(
    @Inject(Router) public router:Router
  ) 
  {
  }
  */
  router = inject(Router);
}
