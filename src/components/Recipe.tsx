import { srOnly } from '../styles.css.ts';

export interface IRecipe {
  title: string;
  description: string;
  time: {
    preparation: number;
    cooking: number;
  };
  ingredients: string[];
  instructions: string[];
  nutrition: {
    calories: number;
    carbs: number;
    protein: number;
    fat: number;
  };
}

export default function Recipe(props: IRecipe) {
  const { title, description, time, ingredients, instructions, nutrition } =
    props;

  return (
    <article>
      <section>
        <h1>{title}</h1>
        <h2 className={srOnly}>Summary</h2>
        <h3>Preparation time</h3>
      </section>
      <section>
        <h2>Ingredients</h2>
      </section>
      <section>
        <h2>Instructions</h2>
      </section>
      <section>
        <h2>Nutrition</h2>
      </section>
    </article>
  );
}
