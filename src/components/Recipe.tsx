import { srOnly } from '../styles.css.ts';
import * as styles from './Recipe.css.ts';

export interface IRecipe {
  picture: string;
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
  const { title, picture } = props;
  // const { description, time, ingredients, instructions, nutrition } = props;

  return (
    <article className={styles.recipe}>
      <img
        className={styles.image}
        src={picture}
        alt={title}
        width='1312'
        height='600'
      />
      <section>
        <h1 className={styles.title}>{title} Recipe</h1>
        <h2 className={srOnly}>Summary</h2>
        <h3 className={styles.prepTime}>Preparation time</h3>
      </section>
      <section>
        <h2 className={styles.sectionHeading}>Ingredients</h2>
      </section>
      <section>
        <h2 className={styles.sectionHeading}>Instructions</h2>
      </section>
      <section>
        <h2 className={styles.sectionHeading}>Nutrition</h2>
      </section>
    </article>
  );
}
