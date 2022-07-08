import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstudents',
  templateUrl: './viewstudents.component.html',
  styleUrls: ['./viewstudents.component.css']
})
export class ViewstudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data=[
    {"Name":"Fathima","age":19, "Photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWOdZJlzGgsaxupEmN1jGhRIn41F0Y-0ZR7A&usqp=CAU"},
    {"Name":"Anjana","age":20, "Photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWOdZJlzGgsaxupEmN1jGhRIn41F0Y-0ZR7A&usqp=CAU"},
    {"Name":"Anu","age":21, "Photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWOdZJlzGgsaxupEmN1jGhRIn41F0Y-0ZR7A&usqp=CAU"},
    {"Name":"Ram","age":25, "Photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWOdZJlzGgsaxupEmN1jGhRIn41F0Y-0ZR7A&usqp=CAU"},
    {"Name":"Sneha","age":45, "Photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWOdZJlzGgsaxupEmN1jGhRIn41F0Y-0ZR7A&usqp=CAU"},
    {"Name":"John","age":30, "Photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWOdZJlzGgsaxupEmN1jGhRIn41F0Y-0ZR7A&usqp=CAU"}
  ]
}
