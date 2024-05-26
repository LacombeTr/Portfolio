import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languageChips'
})
export class LanguageChipsPipe implements PipeTransform {

  transform(value: string){
    switch (value) {
      case 'HTML':

        return `<span class="language-chip"> <i class="devicon-html5-plain"></i> HTML </span>`;

      case 'CSS':
        
      return `<span class="language-chip"> <i class="devicon-css3-plain"></i> CSS </span>`;
      
      case 'Javascript':
        
        return `<span class="language-chip"> <i class="devicon-javascript-plain"></i> Js </span>`;
        
      case 'Typescript':
          
        return `<span class="language-chip"> <i class="devicon-typescript-plain"></i> Ts </span>`;
        
      case 'Angular':
          
        return `<span class="language-chip"> <i class="devicon-angular-plain"></i> Angular </span>`;
    
      default:
        throw console.error('No chip correspond');
        
    }
  }

}
