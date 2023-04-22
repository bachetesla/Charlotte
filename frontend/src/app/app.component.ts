import {Component, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, retry, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


@Injectable()
export class AppComponent {
  title = 'charlotte';
  data = {message: "Loading..."}

  constructor(private http: HttpClient) { }



  ngOnInit() {
    this.http.get("http://localhost:8000").pipe(tap({
      next: (data:any) => this.data.message = data.message,
      error: (data:any) => this.data.message = "Connection failed",
    })).subscribe()

  }







}
