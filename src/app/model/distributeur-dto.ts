import { InscriptionAssuranceVieProduitFinancierDto } from './inscription-assurance-vie-produit-financier-dto';
export class DistributeurDto {
     id !: string;
	 reference !: string;
	 libelle !: string;
	 pwd !: string;
     iAVPF !: InscriptionAssuranceVieProduitFinancierDto[] ;
}
