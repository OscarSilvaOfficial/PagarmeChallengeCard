import { ICardRepository } from "../adapters/repository/card/interfaces/repository.interface";
import { ICardUseCase } from "./interfaces/card.usecase.interface";


class CardUseCase implements ICardUseCase {

  constructor(private cardRepository: ICardRepository) {}

  getCard(number: string): any {
    return this.cardRepository.getCard(number);
  }

  getCards(): any {
    return this.cardRepository.getCards();
  }

  createCard(card: any): any {
    return this.cardRepository.createCard(card);
  }

  updateCard(number: string, card: any): any {
    return this.cardRepository.updateCard(number, card);
  }

  deleteCard(number: string): any {
    return this.cardRepository.deleteCard(number);
  }

}

export { CardUseCase };