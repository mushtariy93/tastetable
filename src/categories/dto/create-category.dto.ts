export class CreateCategoryDto {
  name: Record<string, string>;

  description: string;

  languageId: string;

  id?: string;
}
