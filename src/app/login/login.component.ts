import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  ngOnInit(){

  }

  teste(){
    const msg = "funcionou";
    alert(msg);
    
  }
}
