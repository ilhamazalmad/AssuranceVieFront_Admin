export class ClientDto {
    id!: string;
	nom!: string;
	prenom!: string;
	adresse!: string;
	telephone!: string;
	cin!: string;
    dateNaissance!: string;
    pwd !: string;
      /*constructor(nom:string,prenom:string,adresse:string,telephone:number,
        cin:string,dateNaissance:Date,copieCin:string){
            this.nom=nom;
            this.prenom=prenom;
            this.adresse=adresse;
            this.telephone=telephone;
            this.cin=cin;
            this.dateNaissance=dateNaissance;
            this.copieCin=copieCin;
      }*/
      constructor(){}
}
