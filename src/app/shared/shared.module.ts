import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedLazyImageComponent } from './components/lazy-image/lazy-image.component';



@NgModule({
  declarations: [
    SidebarComponent,
    SharedLazyImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    SharedLazyImageComponent
  ]
})
export class SharedModule { }
