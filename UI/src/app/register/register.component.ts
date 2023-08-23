import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AccountService } from '../services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegistration = new EventEmitter();

  model: any = {}
  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void{
  }
  register(){
    this.accountService.register(this.model).subscribe({
      next: () =>{

        this.cancel()
      },
      error: error => this.toastr.error(error.error)
    })
  }
  cancel(){
    this.cancelRegistration.emit(false);
  }

}
