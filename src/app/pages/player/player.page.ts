import { Component, OnInit } from '@angular/core';
import { Howl } from 'howler';

@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {

  ambientImg = '';
  music: any;
  isPlaying = false;

  constructor() { }

  ngOnInit() {
    this.ambientImg = `url(assets/img/${history.state.ambient}.jpg)`;
    this.music = new Howl({src: [`assets/music/${history.state.ambient}.mp3`], loop: true});
  }

  onClickPlayMusic() {
    this.music.play();
    this.isPlaying = !this.isPlaying;
  }

  ionViewWillLeave() {
    this.music.stop();
  }

}
