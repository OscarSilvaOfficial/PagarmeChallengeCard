interface ICardUseCase {
  getCard(number: string): any;
  getCards(): any;
  createCard(card: any): any;
  updateCard(number: string, card: any): any;
  deleteCard(number: string): any;
}

export { ICardUseCase };