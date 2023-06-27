import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TestHttpService } from 'src/app/core/services/test-http.service';
import { register } from 'swiper/element/bundle';
import Swiper from 'swiper';





register();

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],

})
export class LandingPageComponent implements OnInit, AfterViewInit {

  public itemsToBuy$ = new BehaviorSubject<any[]>([]);
  public recommendedItems$ = new BehaviorSubject<any[]>([]);
  public display2$ = new BehaviorSubject<boolean>(false)
  public display1$ = new BehaviorSubject<boolean>(false)

  @ViewChild('swiperRef') swiperRef?: ElementRef;


  public items: any

  constructor(
    private testHttpService: TestHttpService,
    private cdr: ChangeDetectorRef
  ) { }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.swiperRef!.nativeElement.swiper.update()
    },300)
  }

  ngOnInit() {
    this.testHttpService.test1().subscribe((value) => {
      value.forEach(element => {
        element.expanded = false;
      });
      this.itemsToBuy$.next(value);
      this.display1$.next(true);
      this.items = value
    })
    this.testHttpService.test2().subscribe((value) => {
      value.forEach(element => {
        element.expanded = false;
      });
      this.recommendedItems$.next(value);
        this.display2$.next(true);
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
    let a = [1, 2, 3, 4, 5];

  }

  test(item: any, event: any) {
    if (event.target.swiper.activeIndex === 1) {
      this.itemsToBuy$.next([...this.itemsToBuy$.value, item]);
    } else {
      this.itemsToBuy$.next(this.itemsToBuy$.value.filter(x => x !== item));
    }
  }

}
