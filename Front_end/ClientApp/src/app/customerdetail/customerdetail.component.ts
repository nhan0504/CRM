import { Component } from '@angular/core';

@Component({
    selector: 'app-customerdetail-component',
    templateUrl: './customerdetail.component.html'
})
export class CustomerdetailComponent {
    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
    }
}
