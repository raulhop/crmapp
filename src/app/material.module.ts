import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule,MatPaginatorModule,MatSortModule, MatFormFieldModule, MatSelectModule } from '@angular/material';

@NgModule({
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})

export class MaterialModule {}