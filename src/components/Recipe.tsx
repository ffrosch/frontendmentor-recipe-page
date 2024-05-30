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
    calories: string;
    carbs: string;
    protein: string;
    fat: string;
  };
}

export default function Recipe(props: IRecipe) {
  const {
    title,
    picture,
    ingredients,
    time,
    instructions,
    nutrition,
    description,
  } = props;

  return (
    <article className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={picture}
          alt={title}
          width='1312'
          height='600'
        />
      </div>
      <section className={styles.section}>
        <h1 className={styles.title}>{title} Recipe</h1>
        <h2 className={srOnly}>Summary</h2>
        <p>{description}</p>
        <h3 className={styles.prepTime}>Preparation time</h3>
        <ul>
          <li>
            <p>
              <strong>Total:</strong> Approximately{' '}
              {time.preparation + time.cooking} minutes
            </p>
          </li>
          <li>
            <p>
              <strong>Preparation:</strong> {time.preparation} minutes
            </p>
          </li>
          <li>
            <p>
              <strong>Cooking:</strong> {time.cooking} minutes
            </p>
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Ingredients</h2>
        <ul>
          {ingredients.map((ingredient, index) => {
            return (
              <li key={index}>
                <p>{ingredient}</p>
              </li>
            );
          })}
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Instructions</h2>
        <ol>
          {instructions.map((instruction, index) => {
            const pos = instruction.search(':');
            return (
              <li key={index}>
                {pos > 0 ? (
                  <p>
                    <strong>{instruction.slice(0, pos + 1)}</strong>
                    {instruction.slice(pos + 1)}
                  </p>
                ) : (
                  <p>{instruction}</p>
                )}
              </li>
            );
          })}
        </ol>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Nutrition</h2>
        <table className={styles.table}>
          <caption>
            The table below shows nutritional values per serving without the
            additional fillings.
          </caption>
          <tbody>
            {Object.entries(nutrition).map(([key, value]) => {
              return (
                <tr
                  key={key}
                  className={styles.tr}
                >
                  <th
                    className={styles.th}
                    scope='row'
                  >
                    {key}
                  </th>
                  <td className={styles.td}>{value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </article>
  );
}
