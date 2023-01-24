import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  

  constructor(private route: ActivatedRoute){
    
  }
  
  ngOnInit(){
    var name: string = 'teste';
    this.route.params.subscribe(params => {
      name = params['name']
    });
    alert('entrou aqui ' + name);
  }

}
