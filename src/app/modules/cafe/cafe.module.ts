import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCafeComponent } from 'src/app/components/listar-cafe/listar-cafe.component';
import { CafeComponent } from './cafe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CafeComponent, ListarCafeComponent],
  declarations: [CafeComponent, ListarCafeComponent]
})
export class CafeModule { }
