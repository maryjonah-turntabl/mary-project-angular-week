import { Component, OnInit } from '@angular/core';
import { faBook, faCoffee, faPeopleGroup, faHandPointRight, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-retrospective',
  templateUrl: './retrospective.component.html',
  styleUrls: ['./retrospective.component.css']
})
export class RetrospectiveComponent implements OnInit {

  faCoffee = faCoffee
  faBook = faBook;
  faPeopleGroup = faPeopleGroup
  faHandPointRight = faHandPointRight
  faChalkboardTeacher = faChalkboardTeacher

  constructor() { }

  ngOnInit(): void {
  }

}
