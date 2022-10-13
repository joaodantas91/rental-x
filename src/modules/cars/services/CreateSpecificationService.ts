import { ISpecificationRepository } from "../repositories/ISpecificationsRepository"

interface IRequest {
  name: string;
  description: string;
}

class CreateSpeificationService {
  constructor(private specificationsRepository: ISpecificationRepository) {

  }
  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists = this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification already existis!")
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpeificationService }