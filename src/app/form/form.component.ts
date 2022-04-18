import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetApiService } from '../get-api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() newUsername=new EventEmitter ()
  username:string = ''

  inputClick(username:string){
    this.newUsername.emit(username)
  }


  constructor(private getApiService:GetApiService) { }

  ngOnInit(): void {
  }

}
