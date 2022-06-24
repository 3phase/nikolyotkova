import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import * as Flickity from 'flickity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('video')
  public video!: ElementRef;

  @ViewChild('focusContainer')
  public focusContainer!: ElementRef;

  @ViewChild('videoWrapper')
  public videoWrapper!: ElementRef;

  @ViewChild('carouselWrapper')
  public carouselWrapper!: ElementRef;

  @ViewChild('slider')
  public slider!: ElementRef;

  private _visibleTarget = 1;
  private _lastScrollTop = 0;
  private _flickity!: Flickity;

  constructor() {
    new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });
  }

  public scrollToProjects() {
    window.scroll({
      top: this.carouselWrapper.nativeElement.offsetTop + 2,
      left: 0,
      behavior: 'smooth'
    });
    this._visibleTarget = 2;
  }

  ngAfterViewInit() {
    this._flickity = new Flickity(this.slider.nativeElement, { "selectedAttraction": 0.03, "friction": 0.2, "prevNextButtons": true, "pageDots": false });
    if (!!this.video) {
      // this.video.nativeElement.play();
      if (sessionStorage.getItem('videoPlayed')) {
        this._hideVideo();
        return;
      }
      this.video.nativeElement.addEventListener("ended", (event: any) => {
        this._hideVideo();
        sessionStorage.setItem('videoPlayed', 'true');
      }, false);
    }
  }

  private _hideVideo() {
    this.video.nativeElement.style.display = 'none';
    this.focusContainer!.nativeElement.style.visibility = 'visible';
    this.focusContainer!.nativeElement.style.opacity = 1;
  }

  public loadScript() {
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') !== null && scripts[i].getAttribute('src')?.includes("flickity.pkgd.min.js")) {
        scripts[i].remove();
      }
    }

    var dynamicScripts = ["https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"];

    for (var i = 0; i < dynamicScripts.length; i++) {
      let node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

}
