import { Component } from '@angular/core';
import { projectTemplate } from '../../../assets/data/projectTemplate';
import { projectsList } from '../../../assets/data/projectList';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects!: projectTemplate[]; 

  ngOnInit() {
    this.projects = projectsList
  }
  
  hoverInCardFolio(cardFolio: HTMLElement) {
    const textContainer = cardFolio.querySelector('.textContainer') as HTMLElement;
    const ligthener = cardFolio.querySelector('.ligthener') as HTMLElement;
    
    textContainer!.style.transform = 'translateY(0%)';
    ligthener!.style.backgroundColor = 'hsla(0, 0%, 100%, 0.5)';
  }

  hoverOutCardFolio(cardFolio: HTMLElement) {
    const textContainer = cardFolio.querySelector('.textContainer') as HTMLElement;
    const ligthener = cardFolio.querySelector('.ligthener') as HTMLElement;
    
    textContainer!.style.transform = 'translateY(100%)';
    ligthener!.style.backgroundColor = 'hsla(0, 0%, 100%, 0)';
  }
}
