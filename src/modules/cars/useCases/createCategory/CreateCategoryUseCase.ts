import { IcategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: IcategoriesRepository) { }

  execute({ name, description }: IRequest): void {
    const categoryALreadyExists = this.categoriesRepository.findByName(name)

    if (categoryALreadyExists) {
      throw new Error("Category already existis!")
    }

    this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryUseCase } 