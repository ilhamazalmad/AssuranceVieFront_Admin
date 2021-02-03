import { Component, OnInit } from '@angular/core';
import {ConnectionService} from '../services/connection.service';
import {ActivatedRoute,Router} from '@angular/router';
import { ClientDto } from '../model/client-dto';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients!: ClientDto[];
  nom : any;prenom : any;cin:any;telephone:any;

  constructor(private _service:ConnectionService,
    private _router : Router,
    private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    localStorage.setItem("page","client")
      this._service.findAllClient().subscribe(
        data => {
          this.clients=data
        }
      ) 
    
  }

  chercher(val : any){
    if(this.nom == "" && this.prenom == "" && this.cin == "" && this.telephone == ""){
      this.ngOnInit()
    }
    else {
      if (this.nom != ""){
        this.clients=this.clients.filter(
          res=>{
            return res.nom.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());
          }
        )
      }
      else if(val == 1){
        this.ngOnInit()
        this.chercher(0)
      }
      if (this.prenom != ""){
        this.clients=this.clients.filter(
          res=>{
            return res.prenom.toLocaleLowerCase().match(this.prenom.toLocaleLowerCase());
          }
        )
      }
      else if(val == 2){
        this.ngOnInit()
        this.chercher(0)
      }
      if (this.cin != "" ){
        this.clients=this.clients.filter(
          res=>{
            return res.cin.toLocaleLowerCase().match(this.cin.toLocaleLowerCase());
          }
        )
      }
      else if(val == 3){
        this.ngOnInit()
        this.chercher(0)
      }
      if (this.telephone != "" ){
        this.clients=this.clients.filter(
          res=>{
            return res.telephone.toLocaleLowerCase().match(this.telephone.toLocaleLowerCase());
          }
        )
      }
       else if(val == 4){
        this.ngOnInit()
        this.chercher(0)
      }
    }
  }

  delete(id:string){
    if(confirm("Voulez-vous vraiment supprimer le client??")){
      this._service.deleteClient(id).subscribe() 
      window.location.reload();
    }
    
  }
  
  
}
