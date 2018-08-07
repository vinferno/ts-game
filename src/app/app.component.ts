import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'vf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public canvas: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;

  ngOnInit() {
    this.canvas = <HTMLCanvasElement>document.getElementById('cnvs');
    this.ctx = this.canvas.getContext('2d');
    console.log('ctx', this.ctx);
    this.gameLoop();
  }

  public gameLoop() {
    const ctx = this.ctx;
    requestAnimationFrame(this.gameLoop.bind(this));
    ctx.fillStyle = 'black';
    ctx.fillRect( 0, 0, 1280, 720);
    // clear

    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.arc(400, 400, 100, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.restore();
  }

}
