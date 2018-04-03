import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { WebService } from '../web.service';
import {Response} from '@angular/http';
import { FormGroup, FormArray, FormBuilder, Validators,ReactiveFormsModule  } from '@angular/forms';
import { Subscriber, Subscription } from 'rxjs';

//import * as $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit,AfterViewInit {

  data:any=[];
 
  constructor(private webService:WebService) {

    this.webService.getData().subscribe(data => {
      console.log(data);
      this.data=data;
      console.log("The dataValue is"+this.data);
   
  })
   }

  ngOnInit() {
  }

  ngAfterViewInit(){
    $('.selectpicker').selectpicker({
      
    });

  }

}
