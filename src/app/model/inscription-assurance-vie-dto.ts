import {ClientDto} from './client-dto';
import { InscriptionAssuranceVieProduitFinancierDto } from './inscription-assurance-vie-produit-financier-dto';
export class InscriptionAssuranceVieDto {
    id!: string;
	reference!: string;
	client!: ClientDto;
	prix!: string;
    dateInscription!: string;
    iAVPF!: InscriptionAssuranceVieProduitFinancierDto[];
}
