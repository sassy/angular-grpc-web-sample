import { Injectable } from '@angular/core';
import { GreeterClient } from './HelloworldServiceClientPb';
import {HelloRequest, HelloReply} from './helloworld_pb';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrpcserviceService {
  client: GreeterClient;

  constructor() {
    this.client = new GreeterClient('http://localhost:8080');
  }

  sayHello(name: string): Observable<any> {
    const subject = new Subject<any>();
    const request = new HelloRequest();
    request.setName(name);
    this.client.sayHello(request, {}, (err, response) => {
      subject.next(response.getMessage());
    });

    return subject;
  }
}
