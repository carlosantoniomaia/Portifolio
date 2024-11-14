import { Component, inject, signal } from '@angular/core';

import { IProjetos } from '../../interface/IProjetos.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPainelClass } from '../../enum/EDialogPainelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})
export class ProjetosComponent {
  #dialog = inject(MatDialog);
  public arrayProjeto = signal<IProjetos[]>([
    {
      src: '../../../../assets/img/projetos/vfull.png',
      alt: 'Projeto FullStack',
      title: 'Vida FullStack',
      width: '100px',
      height: '51px',
      description: '<p>Explore o facinante mundo da programação</p>',
      links: [
        {
          name: 'conheça o blog',
          href: 'http://vidafullstack.com.br'
        },
      ],


    },

  ]);

  public openDialog(data: IProjetos){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPainelClass.PROJECTS
    })
  }

}
