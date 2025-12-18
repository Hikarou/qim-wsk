import { Component, Inject, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Main } from "./components/main/main";
import { Navigation } from "./components/navigation/navigation";

console.log('Defining App component...');

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Main, Navigation],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
