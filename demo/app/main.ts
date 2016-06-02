import { Component } from '@angular/core';
import { bootstrap } from "@angular/platform-browser-dynamic";

import { SEMANTIC_UI_COMPONENTS } from '../../angular2-semantic-ui';

@Component({
  selector: "lsu-demo",
  directives: [SEMANTIC_UI_COMPONENTS],
  template: `
    <div class="ui container" style="margin: 40px 0;">
      <div class="ui header">Dimmer</div>
      <div style="width:100%; height: 100px; border: 1px solid black;" (click)="toggleDimmer()">
        Dimmer Demo (click to show or hiden)
        <lsu-dimmer [active]="activeDimmer">
          <h2>I'm the dimmer</h2>
        </lsu-dimmer>      
      </div>
      
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
      <lsu-modal [(ngModel)]="showModal" [options]="modalOptions">
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
          <div class="ui black deny button" (click)="cancel()">
            Nope
          </div>
          <div class="ui positive right labeled icon button">
            Yep, that's me
            <i class="checkmark icon"></i>
          </div>
        </div>
      </lsu-modal>
      <button class="ui button" (click)="activeModal()">Active Modal</button>
      
      <div class="ui header">Tab</div>
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
      
      <div class="ui header">Popup</div>
      <button type="button" class="ui button" lsu-popup [trigger]="'click'" [content]="'Popup One.'">
        Click to show popup
      </button>
      <button type="button" class="ui teal button" lsu-popup [trigger]="'hover'" [content]="'Popup Two.'">
        Hover to show popup
      </button>
      <div class="ui input">
        <input type="text" placeholder="Search..." lsu-popup [trigger]="'focus'" [content]="'Please input key word...'">
      </div>
      
      <div class="ui header">Pagination</div>
      <div style="padding:5px 0;">
        <lsu-pagination [disabled]="pagerDisabled" [totalCount]="totalCount" [pageSize]="10" [currentPage]="2" [maxSize]="5" [options]="pageOptions" (onSelectPage)="onSelectPage($event)"></lsu-pagination>
      </div>
      <button class="ui button" type="button" (click)="setTotalCount()">Set Count</button>
      <button class="ui button" type="button" (click)="togglePagerDisable()">{{ pagerDisabled ? 'Enable':'Disable'}}</button>      
    </div>
  `
})

class LsuDemo {
  private activeDimmer: boolean = true;

  private activeLoader: boolean = true;
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

  private totalCount: number = 93;
  private pagerDisabled: boolean = false;
  private pageOptions: any;
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
      "type": "",
      "closeable": true
    }

    this.accordOption = {
      "styled": true,
      "fluid": true,
      "inverted": false,
      "allowMultiple": false
    }

    this.pageOptions = {
      "color": "default",
      "hidenLabel": false,
      "boundaryLinks": true,
      "firstText": "First",
      "lastText": "Last",
      "directionLinks": true,
      "prevText": "<",
      "nextText": ">"
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

  activeModal(): void {
    this.showModal = true;
  }

  cancel(): void {
    this.showModal = false;
  }

  setTotalCount(): void {
    this.totalCount = 32;
  }

  onSelectPage(event): void {
    console.log("event: ", event);
  }

  togglePagerDisable(): void {
    this.pagerDisabled = !this.pagerDisabled;
  }
}

bootstrap(LsuDemo);