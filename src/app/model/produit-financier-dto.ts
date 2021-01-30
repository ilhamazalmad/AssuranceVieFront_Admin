import { InscriptionAssuranceVieProduitFinancierDto } from './inscription-assurance-vie-produit-financier-dto';
import {FormuleDto} from './formule-dto';
export class ProduitFinancierDto {
    id!: string;
	libelle!: string;
	code!: string;
	formules!: FormuleDto[];
	iAVPF!: InscriptionAssuranceVieProduitFinancierDto[];
}
