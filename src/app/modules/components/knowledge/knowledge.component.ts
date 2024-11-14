import { Component, signal } from '@angular/core';
import { Iknowledge } from '../../interface/Iknowledge.interface';



@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<Iknowledge[]>([
    {
    src: "../../../../assets/icons/knowledge/angular.svg",
    alt: "Angular",
    },
    {
      src: "../../../../assets/icons/knowledge/css3.svg",
      alt: "css3",
    },
    {
        src: "../../../../assets/icons/knowledge/html5.svg",
        alt: "html",
     },
        {
        src: "../../../../assets/icons/knowledge/sass.svg",
          alt: "sass",
          },
        ]);
}
