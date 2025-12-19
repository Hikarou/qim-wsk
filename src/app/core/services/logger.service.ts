import { Injectable } from "@angular/core";
import { Qore } from "../../bridges/qore";

@Injectable({
  providedIn: 'root',
})
export class LoggerService implements Qore.Logger {
    
    log(message: string): void {
        console.log(`%cLOG: ${message}`, 'color: green; font-weight: bold;');
    }

}