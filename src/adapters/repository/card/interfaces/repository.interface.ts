interface ICardRepository {
  getCard(number: string): Promise<any>;
  getCards(): Promise<any[]>;
  createCard(card: any): Promise<any>;
  updateCard(number: string, card: any): Promise<any>;
  deleteCard(number: string): Promise<void>;
}

export { ICardRepository };