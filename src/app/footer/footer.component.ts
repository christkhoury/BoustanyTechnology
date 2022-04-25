import { Component, OnInit } from '@angular/core';
import {ProductsSvc} from 'src/ProductsSvc'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  data = []

  constructor(private Things : ProductsSvc) { }

  ngOnInit(): void {
    this.Things.callApi().subscribe((data: any)=>{
      this.data = data;
    })
  }

}