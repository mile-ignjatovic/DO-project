import { Component } from '@angular/core';

@Component({
    selector: 'do-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    test(event) {
        console.log(event);
    }
}
