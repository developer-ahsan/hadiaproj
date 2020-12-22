import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../../services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
// import {} from 'googlemaps';

declare var google;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('map', {static: true}) mapElement: any;
  display = true;
  map: google.maps.Map;
  isLoading = true;
  counters: any;
  centerCords = {
    lat: null,
    lng: null
    };
    locations: any;
    markersOnMap: any;
    options = {
      minValue: 0,
      maxValue: 240,
      animationRule: 'elastic',
      animationDuration: 500
   };
   speed: any;
   angle: any;
  constructor(
    private api: ApiService,
    private spinner: NgxSpinnerService,
    private auth: AuthService,
    public toast: ToastrService,
    public http: HttpClient
  ) {
   }
  ngOnInit() {
    this.gpsdevices();
    this.initMap();
  }
  gpsdevices() {
    const params = {
      username: 'BBits',
      password: 'CBD9FBC749F25D3A61A1620D18A7FC97E5897A758839C2E4BBE7863F286EF96F'
    };
    this.http.post('https://www.ventracloud.com/gkdevice/alllist', params).subscribe((data) => {
      this.markersOnMap = data;
      this.addMarker();
      console.log(data);
    });
  }
  initMap() {
    const uluru = { lat: 34.0207305, lng: -118.6919289 };
    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        zoom: 9,
        center: uluru,
      }
    );
  }
  addMarker() {
    const InforObj = [];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.markersOnMap.length; i++) {
      const contentString = this.markersOnMap[i].drivername;
      const image = '../../../../assets/app/img/car.svg';
      const marker = new google.maps.Marker({
        position: {lat: this.markersOnMap[i].gpsdata.lat, lng: this.markersOnMap[i].gpsdata.lng},
        map: this.map,
        icon: image,
      });
      const infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 300
      });
      marker.addListener('click', () => {
        this.display = false;
        this.speed = this.markersOnMap[i].gpsdata.speedInKmh;
        this.angle = this.markersOnMap[i].gpsdata.trackingAngle;
        document.getElementById('speed').setAttribute('data-value', this.speed);
        document.getElementById('angle').setAttribute('data-value', this.angle);
      });
      marker.addListener('mouseover', () => {
        if (InforObj.length > 0) {
          console.log(InforObj.length);
          InforObj[0].set('marker', null);
        }
        infowindow.open(marker.get('map'), marker);
      });
      marker.addListener('mouseout', () => {
        infowindow.close();
      });
    }
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    const script = document.createElement('script');
    script.src = '../../assets/app/js/gauge.min.js';
    document.body.appendChild(script);
  }
}
