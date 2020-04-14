import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypographyComponent } from './components/typography/typography.component'; 
import { ButtonComponent } from './components/button/button.component';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import { IconComponent } from './components/icon/icon.component';
import { BadgesComponent } from './components/badges/badges.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { SideNavComponent } from './components/navigation/side-nav/side-nav.component';
import { MenuComponent } from './components/navigation/menu/menu.component';

const routes: Routes = [
  {path: 'typography', component: TypographyComponent},
  {path: 'button', component: ButtonComponent},
  {path: 'buttontoggle', component: ButtonToggleComponent},
  {path: 'icon', component: IconComponent},
  {path: 'badges', component: BadgesComponent},
  {path: 'progress-spinner', component: ProgressSpinnerComponent},
  {path: 'navigation/navbar', component: NavbarComponent},
  {path: 'navigation/sidenav', component: SideNavComponent},
  {path: 'navigation/menu', component: MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
