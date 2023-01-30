import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';


@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.scss'],
})
export class ThirdPageComponent implements OnInit, AfterViewInit {
  public newMap: any;
  public mapRef: any;
  public apiKey = 'AIzaSyAfH9yz_yueW7OE86laYM9bb7g9Y-3YvQs';

  constructor() {

  }
  ngOnInit(): void {
  }

  async ngAfterViewInit(): Promise<void> {
    this.mapRef = document.getElementById('map');
    this.newMap = await GoogleMap.create({
      id: 'my-map', // Unique identifier for this map instance
      element: this.mapRef, // reference to the capacitor-google-map element
      apiKey: this.apiKey, // Your Google Maps API Key
      config: {
        center: {
          // The initial position to be rendered by the map
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8, // The initial zoom level to be rendered by the map
      },
    });
  }




}
