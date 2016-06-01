import { Component } from '@angular/core';
import { bootstrap } from "@angular/platform-browser-dynamic";

import { SEMANTIC_UI_COMPONENTS } from '../../angular2-semantic-ui';

@Component({
  selector: "lsu-demo",
  directives: [SEMANTIC_UI_COMPONENTS],
  template: `
    <div class="ui container" style="margin-bottom: 40px;">
      <div class="ui header">Dimmer</div>
      <div style="width:100%; height: 100px; border: 1px solid black;" (click)="toggleDimmer()">
        Dimmer Demo (click to show or hiden)
        <lsu-dimmer [active]="activeDimmer">
          <h2>I'm the dimmer</h2>
        </lsu-dimmer>      
      </div>
      <hr>
      <div class="ui header">Loader</div>
      <div style="width:100%; height: 100px; border: 1px solid black;" (click)="toggleLoader()">
        Loader Demo (click to show or hiden)
        <lsu-loader [active]="activeLoader" [loaderText]="loaderText" [loaderSize]="loaderSize"></lsu-loader>
      </div>
      <div class="ui header">Progress</div>
      <lsu-progress [label]="progressLabel" [percent]="progressPercent" [text]="progressText" [color]="progressColor" [size]="progressSize"></lsu-progress>
      <div class="ui header">Rating</div>
      <lsu-rating [(ngModel)]="rating" [maxRating]="maxRating" [type]="ratingType" [size]="ratingSize"></lsu-rating>
      <strong>Rating Value: {{ rating }}</strong>
      <div class="ui header">CheckBox</div>
      <lsu-checkbox [(ngModel)]="isChecked" [disabled]="isCheckBoxDisabled" [readonly]="isCheckBoxReadOnly" [label]="checkBoxLabel" [type]="checkBoxType"></lsu-checkbox>
      <button class="ui button" (click)="toggleCheckBoxDisabled()">{{ isCheckBoxDisabled ? 'Enable' : 'Disable' }}</button>
      <div class="ui header">DropDown</div>
      <lsu-dropdown [(ngModel)]="selectedItem" [data]="dropdownData" [textField]="dropdownShowField"></lsu-dropdown>
      {{ selectedItem|json }}
      <div class="ui header">Modal</div>
      <lsu-modal [showModal]="showModal" [options]="modalOptions">
        <i class="close icon"></i>
        <div class="header">
          Profile Picture
        </div>
        <div class="image content">
          <div class="description">
            <div class="ui header">We've auto-chosen a profile image for you.</div>
            <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
            <p>Is it okay to use this photo?</p>
          </div>
        </div>
        <div class="actions">
          <div class="ui black deny button">
            Nope
          </div>
          <div class="ui positive right labeled icon button">
            Yep, that's me
            <i class="checkmark icon"></i>
          </div>
        </div>
      </lsu-modal>
      <button class="ui button" (click)="toggleModal()">Toggel Modal</button>
      <div class="ui header">Tab</div>
      <hr>
      <lsu-tabset>
        <lsu-tab [headerText]="'First'">
          <h1>Tab First</h1>
        </lsu-tab>
        <lsu-tab [headerText]="'Second'" [active]="'true'">
          <h1>Tab Second</h1>
        </lsu-tab>
        <lsu-tab [headerText]="'Third'" [active]="'true'">
          <h1>Tab Third</h1>
        </lsu-tab>
      </lsu-tabset>
      <hr>
      <div class="ui header">Accordion</div>
      <lsu-accordion [option]="accordOption">
        <lsu-accordionPanel [title]="'What is a dog?'">
          <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
        </lsu-accordionPanel>
        <lsu-accordionPanel [title]="'What kinds of dogs are there?'" [active]="'true'">
          <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
        </lsu-accordionPanel>
        <lsu-accordionPanel [title]="'How do you acquire a dog?'">
          <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
        </lsu-accordionPanel>
      </lsu-accordion>
    </div>
  `
})

class LsuDemo {
  private activeDimmer: boolean = false;

  private activeLoader: boolean = false;
  private loaderText: string = "Loading";
  private loaderSize: string = "";

  private progressLabel: string = "Uploading file";
  private progressPercent: number = 0;
  private progressText: string;
  private progressColor: string = "teal";
  private progressSize: string = "standard";
  private progressTimmer: any;

  private rating: number = 3;
  private maxRating: number = 5;
  private ratingType: string = "star";
  private ratingSize: string = "huge";

  private isChecked: boolean;
  private isCheckBoxDisabled: boolean = false;
  private isCheckBoxReadOnly: boolean = false;
  private checkBoxLabel: string = "Check Me";
  private checkBoxType: string = "slider";

  private selectedItem: any;
  private dropdownData: Array<any> = [];
  private dropdownShowField: string = "name";

  private showModal: boolean = false;
  private modalOptions: any;

  private accordOption: any;
  constructor() {
    this.progressPercent = 67;

    for (var i = 0; i < 10; i++) {
      this.dropdownData.push({
        id: i,
        name: "name_" + i
      });
    }

    this.modalOptions = {
      "size": "small",
      "type": "basic",
      "closeable": true,
      "onApprove": (e) => {
        return true;
      },
      "onDeny": (e) => {
        return true;
      }
    }
    
    this.accordOption = {
      "styled": true,
      "fluid": true,
      "inverted": false,
      "allowMultiple": false
    }
  }

  toggleDimmer(): void {
    this.activeDimmer = !this.activeDimmer;
  }

  toggleLoader(): void {
    this.activeLoader = !this.activeLoader;
  }

  toggleCheckBoxDisabled(): void {
    this.isCheckBoxDisabled = !this.isCheckBoxDisabled;
  }

  toggleModal(): void {
    this.showModal = !this.showModal;
  }
}

bootstrap(LsuDemo);