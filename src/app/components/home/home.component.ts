import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  scrollBtn(){
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',})
  }

  @HostListener('window:scroll', [])
  onWindowScroll(){
      var deco = document.querySelector(".deco") as HTMLElement
      var decoSub1 = document.getElementById('decoSmallOne') as HTMLElement
      var decoSub2 = document.getElementById('decoSmallTwo') as HTMLElement
      var decoSub3 = document.getElementById('decoSmallThree') as HTMLElement
      
      deco.style.transform = "translateY("+ -window.scrollY*1.1 + "px) rotate(45deg)"
      decoSub1.style.transform = "translateX("+ -window.scrollY*0.5 + "px) translateY("+ -window.scrollY*0.5 + "px)"
      decoSub2.style.transform = "translateX("+ -window.scrollY*0.5 + "px) translateY("+ -window.scrollY*0.175 + "px) rotate("+ -window.scrollY/5 +"deg)"
      decoSub3.style.transform = "translateX("+ -window.scrollY*0.175 + "px) translateY("+ -window.scrollY*0.5 + "px) rotate("+ window.scrollY/5 +"deg)"
  }
}