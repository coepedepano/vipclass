import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.router.navigateByUrl("/add-product");
  }

}
