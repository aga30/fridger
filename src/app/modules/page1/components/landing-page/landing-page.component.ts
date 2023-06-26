import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TestHttpService } from 'src/app/core/services/test-http.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {

  public itemsToBuy$ = new BehaviorSubject<any[]>([])
  public items: any

  constructor(private testhttpService: TestHttpService) { }
  public swiperOptions: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 30
  };
  ngOnInit() {
    this.testhttpService.test1().subscribe((value) => {
      value.forEach(element => {
        element.expanded = false;
      });
      this.itemsToBuy$.next(value);
      this.items = value
    })
  }

  public onExpand(itemRow: any): void {
    itemRow.expanded = !itemRow.expanded
  }

  deleteItem(item: any) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items = this.items.filter((x: any) => x !== item);
    }
    this.itemsToBuy$.next(this.items);
    let a=[1,2,3,4,5];
    a.
  }

}
