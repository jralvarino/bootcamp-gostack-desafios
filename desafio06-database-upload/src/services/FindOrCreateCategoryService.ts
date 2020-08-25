import { getRepository } from 'typeorm';
import Category from '../models/Category';

class CreateCategoryService {
  public async execute(title: string): Promise<Category> {
    const categoryRepository = getRepository(Category);

    let checkCategoryExists = await categoryRepository.findOne({
      where: { title },
    });

    if (!checkCategoryExists) {
      checkCategoryExists = await categoryRepository.create({ title });
      await categoryRepository.save(checkCategoryExists);
    }

    return checkCategoryExists;
  }
}

export default CreateCategoryService;
