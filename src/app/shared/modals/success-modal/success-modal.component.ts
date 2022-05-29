import {BsModalRef} from 'ngx-bootstrap/modal';
import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.css']
})
export class SuccessModalComponent implements OnInit {
  modalHeaderText: string;
  modalBodyText: string;  
  okButtonText: string;
  redirectOnOk: EventEmitter<any> = new EventEmitter<any>();

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  onOkClick = () => {
    this.redirectOnOk.emit();
    this.bsModalRef.hide();
  }
}
