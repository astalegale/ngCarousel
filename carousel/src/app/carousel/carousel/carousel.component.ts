import { Component, OnInit, AfterContentInit, ContentChildren, QueryList, Input } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterContentInit {

    @Input() delay: number;

    imgCount: number;
    imgIdx = 0;

    @ContentChildren(ItemComponent) itemList: QueryList<ItemComponent>;
    constructor() { }

    async delays(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    startCarousel() {
        let curImgidx;
        let prevImgidx;
        while (true) {

            curImgidx = this.imgIdx % this.imgCount;
            prevImgidx = this.imgIdx % this.imgCount;
            await this.delays(this.delay);

        }
    }

    ngOnInit() {
    }

    ngAfterContentInit(): void {

        this.imgCount = this.itemList.length;

        this.startCarousel();
    }
}
