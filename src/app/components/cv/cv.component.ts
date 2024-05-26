import { Component, OnInit } from '@angular/core';
import { workExperiences } from '../../../assets/data/workExperiences';
import { expTemplate } from '../../../assets/data/experienceTemplate';
import { educationDiploma } from '../../../assets/data/educationDiploma';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent implements OnInit {

  workexperiences!: expTemplate[];
  education!: expTemplate[];

  ngOnInit(){
    this.education = educationDiploma;
    this.workexperiences = workExperiences;
  };

  // ngAfterViewInit(){

  //   const sections = document.querySelectorAll('.section');

  //   sections.forEach(element => {
  //     let lineNumber = 1

  //     const experiences = element.querySelectorAll('.experience');

  //     console.log(experiences)

  //     experiences.forEach(exp =>{
        
  //     })

  //     const subsections = element.querySelectorAll('.experience-title, .experience-date, .experience-society, .experience-description');

  //     subsections.forEach(subElement => {

  //       const subEl = subElement as HTMLElement;
  //       const heightBlock = subEl.clientHeight - 20;
  //       const lineHeight = 1.2 * parseInt(getComputedStyle(subElement).getPropertyValue('font-size'));

  //       const lineCount = Math.round(heightBlock / lineHeight);

  //       const lineCounter = subElement.previousElementSibling;

  //       let incr = 0;

  //       while (incr < lineCount) {
  //         lineCounter!.innerHTML += lineNumber + '</br>';
  //         lineNumber ++;
  //         incr ++;
  //       }
  //     });
  //   });
  // }
}
