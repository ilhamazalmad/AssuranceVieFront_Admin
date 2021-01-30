import { InscriptionAssuranceVieProduitFinancierDto } from './inscription-assurance-vie-produit-financier-dto';
export class EtatInscriptionDto {
    id!: string;
	reference!: string;
	libelle!: string;
	 iAVPF!:InscriptionAssuranceVieProduitFinancierDto[];
}
