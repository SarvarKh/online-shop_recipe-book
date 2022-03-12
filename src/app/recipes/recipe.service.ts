import { Recipe } from "./recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://www.maggi.co.uk/sites/default/files/styles/maggi_desktop_image_style/public/NUK1265%20maggi%20Recipes%20banner%201500x700px%20opt2A.jpg?h=4f5b30f1&itok=DcsF1RwA'),
    new Recipe('A another Recipe', 'This is another test', 'https://www.washingtonpost.com/resizer/GhgmkKBkqVEKUwQj9tNT-0OtVAc=/arc-anglerfish-washpost-prod-washpost/public/L5RAEGUUZQI6ZOZROT6ANQFDUU.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}