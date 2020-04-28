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
import { ListComponent } from './components/layout/list/list.component';
import { GridComponent } from './components/layout/grid/grid.component';
import { ExpansionPanelComponent } from './components/layout/expansion-panel/expansion-panel.component';
import { CardsComponent } from './components/layout/cards/cards.component';
import { TabsComponent } from './components/layout/tabs/tabs.component';
import { StepperComponent } from './components/layout/stepper/stepper.component';
import { InputComponent } from './components/forms/input/input.component';
import { SelectComponent } from './components/forms/select/select.component';
import { AutoCompleteComponent } from './components/forms/auto-complete/auto-complete.component';
import { RadioButtonComponent } from './components/forms/radio-button/radio-button.component';
import { DatePickerComponent } from './components/forms/date-picker/date-picker.component';

const routes: Routes = [
  { path: 'typography', component: TypographyComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'buttontoggle', component: ButtonToggleComponent },
  { path: 'icon', component: IconComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'progress-spinner', component: ProgressSpinnerComponent },
  { path: 'navigation/navbar', component: NavbarComponent },
  { path: 'navigation/sidenav', component: SideNavComponent },
  { path: 'navigation/menu', component: MenuComponent },
  { path: 'layout/list', component: ListComponent },
  { path: 'layout/grid', component: GridComponent },
  { path: 'layout/expanel', component: ExpansionPanelComponent },
  { path: 'layout/cards', component: CardsComponent },
  { path: 'layout/tabs', component: TabsComponent },
  { path: 'layout/stepper', component: StepperComponent },
  { path: 'forms/input', component: InputComponent },
  { path: 'forms/select', component: SelectComponent },
  { path: 'forms/autocomplete', component: AutoCompleteComponent },
  { path: 'forms/radiobutton', component: RadioButtonComponent },
  { path: 'forms/datepicker', component: DatePickerComponent },

  { path: '**', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
