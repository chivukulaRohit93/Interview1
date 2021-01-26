import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles:any = [];
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.get().subscribe((res:any[]) => {
      this.articles = res;
    });
  }

}
