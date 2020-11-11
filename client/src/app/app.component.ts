import { Component, OnInit } from '@angular/core';
import { GrpcserviceService } from './grpcservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'client';
  response: string;

  constructor(
    private _grpcService: GrpcserviceService
  ) {
  }

  ngOnInit() {
    this._grpcService.sayHello('world!').subscribe((res) => {
      this.response = res;
    });
  }


}
