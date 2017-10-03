import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-carousel-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

    @Input() isHide: boolean;

    constructor() {
        this.isHide = true;
    }

    ngOnInit() {
    }

}
