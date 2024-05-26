import { Component} from '@angular/core';
import { photoTemplate } from '../../../assets/data/photoTemplate';
import { photoList } from '../../../assets/data/photoList';

@Component({
  selector: 'app-portfolio-photos',
  templateUrl: './portfolio-photos.component.html',
  styleUrl: './portfolio-photos.component.scss'
})
export class PortfolioPhotosComponent {

  listPhoto!: photoTemplate[];

  ngOnInit(){
    this.listPhoto = photoList;
  }
  
  hoverInCard(photoCard: HTMLElement) {
    const textContainer = photoCard.querySelector('.textContainer') as HTMLElement;
    const ligthener = photoCard.querySelector('.ligthener') as HTMLElement;
    const bgImg = photoCard.querySelector('.bgImage') as HTMLElement;
    
    textContainer!.style.transform = 'translateY(0%)';
    ligthener!.style.backgroundColor = 'hsla(0, 0%, 100%, 0.5)';
    bgImg!.style.transform = 'scale(105%)';
  }
  
  hoverOutCard(photoCard: HTMLElement) {
    const textContainer = photoCard.querySelector('.textContainer') as HTMLElement;
    const ligthener = photoCard.querySelector('.ligthener') as HTMLElement;
    const bgImg = photoCard.querySelector('.bgImage') as HTMLElement;
    
    textContainer!.style.transform = 'translateY(100%)';
    ligthener!.style.backgroundColor = 'transparent';
    bgImg!.style.transform = 'scale(100%)';
  }
}