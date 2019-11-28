import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

const components = [
];

const entryComponents = [
];


@NgModule({
  declarations: [
    ...components,
    ...entryComponents,
  ],
  entryComponents: [
    ...components,
    ...entryComponents,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
  ]
})
export class CoreModule { }
