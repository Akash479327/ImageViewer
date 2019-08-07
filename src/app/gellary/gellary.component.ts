import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gellary',
  templateUrl: './gellary.component.html',
  styleUrls: ['./gellary.component.scss']
})
export class GellaryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
    gellary(){
      this.router.navigate(['/gallery']);
  
    }
  }
