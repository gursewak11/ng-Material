import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { TypographyComponent } from './components/typography/typography.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import { IconComponent } from './components/icon/icon.component';
import { BadgesComponent } from './components/badges/badges.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { SideNavComponent } from './components/navigation/side-nav/side-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ToolTipComponent } from './components/popupModels/tool-tip/tool-tip.component';
import { SnackbarComponent } from './components/popupModels/snackbar/snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonComponent,
    ButtonToggleComponent,
    IconComponent,
    BadgesComponent,
    ProgressSpinnerComponent,
    NavbarComponent,
    SideNavComponent,
    MenuComponent,
    ListComponent,
    GridComponent,
    ExpansionPanelComponent,
    CardsComponent,
    TabsComponent,
    StepperComponent,
    InputComponent,
    SelectComponent,
    AutoCompleteComponent,
    RadioButtonComponent,
    DatePickerComponent,
    ToolTipComponent,
    SnackbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
