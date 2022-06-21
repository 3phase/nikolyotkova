import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

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

  constructor() {
    new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });
  }

  ngAfterViewInit() {
    if (!!this.video) {
      // this.video.nativeElement.play();
      this.video.nativeElement.addEventListener("ended", (event: any) => {
        this.video.nativeElement.style.display = 'none';
        this.focusContainer!.nativeElement.style.visibility = 'visible';
        this.focusContainer!.nativeElement.style.opacity = 1;
      }, false);
    }
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
