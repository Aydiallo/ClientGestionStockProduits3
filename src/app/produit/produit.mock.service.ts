import {Injectable} from '@angular/core' ;
import {Produit} from '../shared/produit';

@Injectable()
export class ProduitMockService {
  private PRODUITS: Produit[] = [];

  constructor() {
    const p1: Produit = new Produit('Livre', 50, 20);
    const p2: Produit = new Produit('Cahier', 150, 20.5);
    const p3: Produit = new Produit('Stylo', 500, 2.12);
    this.PRODUITS.push(p1);
    this.PRODUITS.push(p2);
    this.PRODUITS.push(p3);
  }
  public getProduits(): Produit[] {
    return this.PRODUITS;
  }
}
