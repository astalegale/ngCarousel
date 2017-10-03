import {
  Component,
  OnInit,
  AfterContentInit,
  ContentChildren,
  QueryList,
  Input
} from "@angular/core";
import { ItemComponent } from "../item/item.component";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"]
})
export class CarouselComponent implements OnInit, AfterContentInit {
  @Input() delay: number;

  imgCount: number;
  imgIdx = 0;

  @ContentChildren(ItemComponent) itemList: QueryList<ItemComponent>;
  constructor() {}

  delays(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async startCarousel() {
    let curImgidx;
    let prevImgidx;
    while (true) {
        console.log("idx",this.imgIdx);
      prevImgidx = this.imgIdx == 0 ? 0 : (this.imgIdx-1) % this.imgCount;
      curImgidx = this.imgIdx % this.imgCount;

      console.log("cur", curImgidx, "prev", prevImgidx);

      console.log(this.itemList.toArray()[curImgidx]);
      this.itemList.toArray()[prevImgidx].isHide = true;
      this.itemList.toArray()[curImgidx].isHide = false;
      this.imgIdx++;
      await this.delays(this.delay);
    }
  }

  ngOnInit() {}

  ngAfterContentInit(): void {
    this.imgCount = this.itemList.length;

    this.startCarousel();
  }
}
