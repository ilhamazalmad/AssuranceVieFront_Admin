import { Component } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title='Assurance de vie';

  constructor(private _router : Router,
    private _activatedRoute:ActivatedRoute){}
  
    ngOnInit(): void {
      if(localStorage.getItem("session") == null)
      { 
        localStorage.setItem("session","false");
        localStorage.removeItem("page");
        (document.getElementById('login') as HTMLElement).textContent="Connexion";
        (document.getElementById('profil') as HTMLElement).hidden=true;
        (document.getElementById('clients') as HTMLElement).hidden=true;
        (document.getElementById('distributeurs') as HTMLElement).hidden=true;
        this._router.navigate(['Login'])

      }
      else if(localStorage.getItem("session") == "false"){
        (document.getElementById('login') as HTMLElement).textContent="Connexion";
        (document.getElementById('profil') as HTMLElement).hidden=true;
        (document.getElementById('clients') as HTMLElement).hidden=true;
        (document.getElementById('distributeurs') as HTMLElement).hidden=true;
        this._router.navigate(['Login'])
      }
      else if(localStorage.getItem("session") == "true"){
        (document.getElementById('login') as HTMLElement).textContent="Deconnexion";
        (document.getElementById('profil') as HTMLElement).hidden=false; 
        (document.getElementById('clients') as HTMLElement).hidden=false;
        (document.getElementById('distributeurs') as HTMLElement).hidden=false; 
        if(localStorage.getItem("page") == "client")  {
          this._router.navigate(['/Clients'])
        }    
        else if(localStorage.getItem("page") == "distributeur"){
          this._router.navigate(['/Distributeur'])
        }
        else{
          this._router.navigate(['/'])
        }
      }
    }

    profil(){
      this._router.navigate(['/'])
    }
    clients(){
      this._router.navigate(['/Clients'])
    }
    distributeurs(){
      this._router.navigate(['/Distributeurs'])
    }
    connexion(){
        localStorage.setItem("session","false");
        (document.getElementById('login') as HTMLElement).textContent="Connexion";
        (document.getElementById('profil') as HTMLElement).hidden=true;
        (document.getElementById('clients') as HTMLElement).hidden=true;
        (document.getElementById('distributeurs') as HTMLElement).hidden=true;
        
      this._router.navigate(['Login'])
      
    }

  
}