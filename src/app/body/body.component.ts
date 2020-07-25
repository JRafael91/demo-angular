import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  loading: boolean = true;

  usuarios: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {

      this.usuarios.push(
        {
          name: 'Rafael',
          age: '28'
        },
        {
          name: 'Hector',
          age: '19'
        }
      );

      this.loading = false;
    }, 1500);
  }

}
