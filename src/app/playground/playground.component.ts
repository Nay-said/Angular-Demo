import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
 

  constructor() { }

  ngOnInit() {
  
  }

  foo() {
    let S = 0
    let T = 0
    let n = 100
    while (n >= 2) {
      S = S + n
      n = n - 1
      T = T + n
      n = n - 1
    }
    console.log(S, T)
  }
  // https://www.bilibili.com/video/BV1fW411X7WC
}