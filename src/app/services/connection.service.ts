import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {DistributeurDto} from '../model/distributeur-dto';
import { InscriptionAssuranceVieProduitFinancierDto } from '../model/inscription-assurance-vie-produit-financier-dto';
import { InscriptionAssuranceVieDto } from '../model/inscription-assurance-vie-dto';
import { ProduitFinancierDto } from '../model/produit-financier-dto';
import {EtatInscriptionDto} from '../model/etat-inscription-dto';
import {FormuleDto} from '../model/formule-dto';
import {ClientDto} from '../model//client-dto';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private _http :HttpClient) { }

  public findAllDistributeur():Observable<any>{
    return this._http.get<DistributeurDto[]>("http://localhost:8090/assurance-api/Distributeur/find");
  }
  public findByReference(reference :String):Observable<any>{
    return this._http.get<DistributeurDto>("http://localhost:8090/assurance-api/Distributeur/find/reference/"+reference);
  }
  public findByLibelle(libelle :String):Observable<any>{
    return this._http.get<DistributeurDto>("http://localhost:8090/assurance-api/Distributeur/find/libelle/"+libelle);
  }
  public findAllClient():Observable<any>{
    return this._http.get<ClientDto[]>("http://localhost:8090/assurance-api/Client/find");
  }
  public findByCin(libelle :String):Observable<any>{
    return this._http.get<ClientDto>("http://localhost:8090/assurance-api/Client/find/libelle/"+libelle);
  }
  public findByTelephone(libelle :String):Observable<any>{
    return this._http.get<ClientDto>("http://localhost:8090/assurance-api/Client/find/libelle/"+libelle);
  }
  public findAllIAVPF():Observable<any>{
    return this._http.get<InscriptionAssuranceVieProduitFinancierDto[]>("http://localhost:8090/assurance-api/IAVPF/find/all");
  }
  public findAllForDistributeur(id :String):Observable<any>{
    return this._http.get<InscriptionAssuranceVieProduitFinancierDto[]>("http://localhost:8090/assurance-api/IAVPF/find/dist/"+id);
  }
  public generateReport(id :String):Observable<any>{
    return this._http.get("http://localhost:8090/assurance-api/IAVPF/report/IDP/"+id);
  }
  public deleteDistributeur(id :String):Observable<any>{
    return this._http.delete("http://localhost:8090/assurance-api/Distributeur/delete/id/"+id);
  }
  public deleteClient(id :String):Observable<any>{
    return this._http.delete("http://localhost:8090/assurance-api/Client/delete/"+id);
  }
  public deleteIAVPF(id :String):Observable<any>{
    return this._http.delete("http://localhost:8090/assurance-api/IAVPF/delete/id/"+id);
  }

}
