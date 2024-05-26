import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{

  ngOnInit(){
    const blobs = document.querySelectorAll('.blob');

    blobs.forEach(el => {
      var blob = el as HTMLElement;
      blob.style.top = (100 * Math.random()) - 25 + 'vh';
      blob.style.left = (100 * Math.random()) - 25 + 'vw';
      blob.style.height = (100 * Math.random()) + 25 + '%';
    });
  }
}
