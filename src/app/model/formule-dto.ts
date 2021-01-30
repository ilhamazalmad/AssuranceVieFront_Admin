import { ProduitFinancierDto } from './produit-financier-dto';
export class FormuleDto {
    id!: string;
	reference!: string;
	libelle!: string;
	prix!: string;
    produitFinancier!: ProduitFinancierDto;
}
