import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { KnowledgeComponent } from '../../components/knowledge/knowledge.component';
import { ExperienciaComponent } from '../../components/experiencia/experiencia.component';
import { ProjetosComponent } from '../../components/projetos/projetos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, KnowledgeComponent, ExperienciaComponent, ProjetosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
