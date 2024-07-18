import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { FaIconLibrary, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { fontAwesomeIcons } from './shared/font-awesome-icons';

@Component({
  selector: 'wac-root',
  standalone: true,
  imports: [RouterOutlet, NgbAccordionModule, FontAwesomeModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'whatsapp-clone-front';

  //Injects the FaIconLibrary service for use in the FontAwesome icon configuration.
  private faIconLibrary: FaIconLibrary = inject(FaIconLibrary);

  //Method that is executed when the component is initialized and calls initFontAwesome.
  ngOnInit(): void {
    //Private method that adds FontAwesome icons to the injected icon library.
    this.initFontAwesome();
  }

  private initFontAwesome() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }


}
