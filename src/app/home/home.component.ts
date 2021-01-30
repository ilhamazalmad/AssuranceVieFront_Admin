import { Component, OnInit } from '@angular/core';
import { DistributeurDto } from '../model/distributeur-dto';
import {ConnectionService} from '../services/connection.service';
import {ActivatedRoute,Router} from '@angular/router';
import { InscriptionAssuranceVieProduitFinancierDto } from '../model/inscription-assurance-vie-produit-financier-dto';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  distributeur  = new DistributeurDto;
  iAVPFs!: InscriptionAssuranceVieProduitFinancierDto[];
  cin : any;
  etat : any;

  constructor(private _service:ConnectionService,
    private _router : Router,
    private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const value = localStorage.getItem("distributeur");
    if (value != null){
      this._service.findAllForDistributeur(value).subscribe(
        data => {
          this.iAVPFs=data
        }
      ) 
    }
  }

  chercher(){
    if(this.cin == "" && this.etat == ""  ){
      this.ngOnInit()
    }
    else {
      if (this.cin != ""){
        this.iAVPFs=this.iAVPFs.filter(
          res=>{
            return res.iAV.client.cin.toLocaleLowerCase().match(this.cin.toLocaleLowerCase());
          }
        )
      }
      if (this.etat != ""){
        this.iAVPFs=this.iAVPFs.filter(
          res=>{
            return res.etatInscription.libelle.toLocaleLowerCase().match(this.etat.toLocaleLowerCase());
          }
        )
      }
    }
  }

  detail(id:string){
    localStorage.setItem("iAVPF",id)
    this._router.navigate(["AcceptForm"])
  }

  report(id :string){
      //this._service.generateReport(id).subscribe()
      document.location.href = "http://localhost:8090/assurance-api/IAVPF/report/IDP/"+id;
  }

}
