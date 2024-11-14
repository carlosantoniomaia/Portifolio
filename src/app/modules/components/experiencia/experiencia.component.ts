import { Component, signal } from '@angular/core';
import { IExperiencia } from '../../interface/iExperiecia.interface';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss'
})
export class ExperienciaComponent {
  public arrayExperiencia = signal<IExperiencia[]>([
    {
      summary: {
        strong: 'Analista de sistemas',
        p: 'Prodemge | março de 2022 - Present',
      },
      text: '<p>Entrei em 2022 como estagiario e hoje atuo como analista de sistemas, e como backend em java</p>',
    },
    {
      summary: {
        strong: 'tecnico em telecomunicações',
        p: 'Inova | março de 2020 - 2022',
      },
      text: '<p>Atuava como tecnico de telecomunicações para tercerizada da Claro Brasil</p>',
    },

  ])
}
