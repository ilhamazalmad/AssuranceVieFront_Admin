import { InscriptionAssuranceVieDto } from './inscription-assurance-vie-dto';
import { ProduitFinancierDto } from './produit-financier-dto';
import {EtatInscriptionDto} from './etat-inscription-dto';
import {DistributeurDto} from './distributeur-dto';
import {FormuleDto} from './formule-dto';

export class InscriptionAssuranceVieProduitFinancierDto {
    id!: string ;
	iAV!: InscriptionAssuranceVieDto;
	produit!: ProduitFinancierDto;
	policeAssurance!: string ;
	distributeur!: DistributeurDto;
	prix!: string ;
	formule!: FormuleDto;
	etatInscription!: EtatInscriptionDto;
}
