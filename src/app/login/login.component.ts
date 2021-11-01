import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogrestService } from '../blogrest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Typescript
  titulo="Inicio de sesión";
  user="";
  pass="";

  login(){
    this.blogrest.login(this.user, this.pass).subscribe(resp => {
      console.log(resp);
    }, error => {
      console.log(error);
    })
    //this.rt.navigate(['/inicio']);
  }

  constructor(private rt:Router, private blogrest: BlogrestService) { }

  ngOnInit(): void {
  }

}
