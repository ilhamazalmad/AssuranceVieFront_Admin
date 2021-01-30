import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user : any;
  pwd : any;
  ngOnInit(): void {
  }
  constructor(
              private _router : Router,
              private _activatedRoute:ActivatedRoute){}
    
  connecter(){
          if(this.user != null && this.pwd != null)
          {
            alert("Connexion réussite :")
            localStorage.setItem("session","true");
            (document.getElementById('login') as HTMLElement).textContent="Deconnexion";
            (document.getElementById('profil') as HTMLElement).hidden=false;
            (document.getElementById('profil') as HTMLElement).textContent="Administrateur";
            this._router.navigate(['/'])
          }
          else
            alert("Erreur : la connexion n'était pas effectuée ")
        } 
      
    

}