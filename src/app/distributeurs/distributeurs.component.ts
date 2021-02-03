import { Component, OnInit} from '@angular/core';
import {ConnectionService} from '../services/connection.service';
import {ActivatedRoute,Router} from '@angular/router';
import { DistributeurDto } from '../model/distributeur-dto';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-distributeurs',
  templateUrl: './distributeurs.component.html',
  styleUrls: ['./distributeurs.component.scss']
})
export class DistributeursComponent implements OnInit {

  distributeurs : Array<any> =[];
  dists!: DistributeurDto[];
  dist!: DistributeurDto;
  distributeur!: DistributeurDto;
  reference : any;libelle : any;
  constructor(private _service:ConnectionService,
    private _router : Router,
    private _activatedRoute:ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    localStorage.setItem("page","distributeur")
      this._service.findAllDistributeur().subscribe(
        data => {
          this.dists=data
          this.dists.forEach(element => {
            this.dist=element
            if (this.dist.id !="1"){
              this.distributeurs.push(this.dist);
            }
          });
          
        }
      ) 
    
  }

  chercher(val : any){
    if(this.reference == "" && this.libelle == ""){
      this.ngOnInit()
    }
    else {
      if (this.reference != "" ){
        this.distributeurs=this.distributeurs.filter(
          res=>{
            return res.reference.toLocaleLowerCase().match(this.reference.toLocaleLowerCase());
          }
        )
      }
      else if(val == 1){
        this.ngOnInit()
        this.chercher(0)
      }
      if (this.libelle != "" ){
        this.distributeurs=this.distributeurs.filter(
          res=>{
            return res.libelle.toLocaleLowerCase().match(this.libelle.toLocaleLowerCase());
          }
        )
      }
      else if(val == 2){
        this.ngOnInit()
        this.chercher(0)
      }
     
    }
  }

  delete(id:string){
    if(confirm("Voulez-vous vraiment supprimer le distributeur??")){
      this._service.deleteDistributeur(id).subscribe() 
      window.location.reload();
    }
    
  }
  add(){
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {reference: this.reference, libelle: this.libelle}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.distributeur = result;
      this._service.saveDistributeur(this.distributeur).subscribe(
        data =>{
          if(data == 1 )
          {
            alert("Insertion réussite ")
            window.location.reload();
          }
          else
          alert("Erreur : l'insertion n'était pas effectuée ")
        },
      error =>alert(" Erreur : l'insertion n'était pas effectuée !! ")
    ) 
    });
  }
  
}
