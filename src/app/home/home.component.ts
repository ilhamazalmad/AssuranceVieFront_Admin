import { Component, OnInit } from '@angular/core';
import { DistributeurDto } from '../model/distributeur-dto';
import {ConnectionService} from '../services/connection.service';
import {ActivatedRoute,Router} from '@angular/router';
import { InscriptionAssuranceVieProduitFinancierDto } from '../model/inscription-assurance-vie-produit-financier-dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  distributeur  = new DistributeurDto;
  iAVPFs!: InscriptionAssuranceVieProduitFinancierDto[];
  cin : any;etat : any;prix:any;distr:any;

  constructor(private _service:ConnectionService,
    private _router : Router,
    private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    localStorage.removeItem("page")
      this._service.findAllIAVPF().subscribe(
        data => {
          this.iAVPFs=data
        }
      ) 
    
  }

  chercher(val:any){
    if(this.cin == "" && this.etat == "" && this.prix == "" && this.distr == "" ){
      this.ngOnInit()
    }
    else {
      if (this.cin != "" && this.cin != null){
        this.iAVPFs=this.iAVPFs.filter(
          res=>{
            return res.iAV.client.cin.toLocaleLowerCase().match(this.cin.toLocaleLowerCase());
          }
        )
      }
      else if(val == 1){
        this.ngOnInit()
        this.chercher(0)
      }
      if (this.etat != "" && this.etat != null){
        this.iAVPFs=this.iAVPFs.filter(
          res=>{
            return res.etatInscription.libelle.toLocaleLowerCase().match(this.etat.toLocaleLowerCase());
          }
        )
      }else if(val == 3){
        this.ngOnInit()
        this.chercher(0)
      }
      if (this.prix != "" && this.prix != null){
        this.iAVPFs=this.iAVPFs.filter(
          res=>{
            return res.prix.toLocaleLowerCase().match(this.prix.toLocaleLowerCase());
          }
        )
      }else if(val == 4){
        this.ngOnInit()
        this.chercher(0)
      }
      if (this.distr != "" && this.distr != null){
        this.iAVPFs=this.iAVPFs.filter(
          res=>{
            return res.distributeur.libelle.toLocaleLowerCase().match(this.distr.toLocaleLowerCase());
          }
        )
      }else if(val == 2){
        this.ngOnInit()
        this.chercher(0)
      }
    }
  }

  delete(id:string){
    if(confirm("Voulez-vous vraiment supprimer ce contrat définitivement??")){
      this._service.deleteIAVPF(id).subscribe() 
      window.location.reload();
    }
    
  }
  report(id :string){
      //this._service.generateReport(id).subscribe()
      document.location.href = "http://localhost:8090/assurance-api/IAVPF/report/IDP/"+id;

  }
  
}
