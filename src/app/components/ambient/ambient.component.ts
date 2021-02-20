import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ambient',
  templateUrl: './ambient.component.html',
  styleUrls: ['./ambient.component.scss'],
})
export class AmbientComponent implements OnInit {

  @Input() ambient;
  ambientImg = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.ambientImg = `url(assets/img/${this.ambient}.jpg)`;
  }

  onClickAmbient(ambient) {
    this.router.navigate(['player'], {state: {ambient}});
  }

}
