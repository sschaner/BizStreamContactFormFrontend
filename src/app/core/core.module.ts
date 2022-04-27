import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavigationComponent, FooterComponent, PageNotFoundComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavigationComponent, FooterComponent, PageNotFoundComponent],
})
export class CoreModule {}
