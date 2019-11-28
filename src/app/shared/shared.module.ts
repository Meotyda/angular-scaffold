import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialComponentsModule } from './material-components.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';


const components = [
];

const dialogs = [
];

const directives = [
];

const pipes = [
];

const modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,

  MaterialComponentsModule,
  FlexLayoutModule,
  LayoutModule,
];

@NgModule({
  declarations: [
    ...components,
    ...dialogs,
    ...directives,
    ...pipes,
  ],
  entryComponents: [
    ...dialogs,
  ],
  imports: [
    ...modules,
  ],
  exports: [
    ...modules,
    ...components,
    ...dialogs,
    ...directives,
    ...pipes,
  ]
})
export class SharedModule { }
