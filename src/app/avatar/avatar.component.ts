import { Component, HostBinding, Input, NgZone, OnInit } from "@angular/core";

import { randomStatus } from "../helpers";

@Component({
  selector: "app-avatar",
  template: `
    <span class="position-relative" *ngIf="!error && src">
      <span
        class="position-relative d-flex rounded-circle"
        [ngStyle]="{
          width: size + 'px',
          height: size + 'px'
        }"
      >
        <img
          [src]="src"
          alt="{{ name }}"
          class="rounded-circle"
          [ngStyle]="{
            width: size + 'px',
            height: size + 'px'
           
          }"
          style="border-radius: 30px; margin-left: 5px; margin-top: 5px"
          (error)="setError()"
        />
        <span
          class="border-white status"
          *ngIf="status"
          [ngClass]="status ? 'text-' + status : ''"
          [ngStyle]="{
            width: size / 3 + 'px',
            height: size / 3 + 'px'
          }"
        ></span>
      </span>
    </span>
    <span class="position-relative" *ngIf="error || !src">
      <span
        class="position-relative d-flex rounded-circle"
        [ngStyle]="{
          width: size + 'px',
          height: size + 'px'
        }"
      >
        <span
          class="d-flex align-items-center justify-content-center w-100 h-100 text-light rounded-circle"
          [ngClass]="'bg-' + getStatus()"
          ></span
        >
        <span
          class="border-white status"
          *ngIf="status"
          [ngClass]="status ? 'text-' + status : ''"
          [ngStyle]="{
            width: size / 3 + 'px',
            height: size / 3 + 'px'
          }"
        ></span>
      </span>
    </span>
  `
})
export class AvatarComponent {
  @HostBinding("class.d-inline-block")
  @Input()
  src: string;
  @Input() name: string;
  @Input() status: string;
  @Input() size = 32;
  error = false;

  constructor() {}

  setError() {
    this.error = true;
    console.log('err');
  }

  getStatus() {
    const status = randomStatus();
    return status;
  }
}
