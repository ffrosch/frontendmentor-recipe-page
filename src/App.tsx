import { useEffect, useState } from 'react';
import * as styles from './App.css.ts';
import Recipe, { IRecipe } from './components/Recipe.tsx';

const App = () => {
  const [recipe, setRecipe] = useState<IRecipe | null>(null);

  useEffect(() => {
    async function getData() {
      const data: IRecipe = await import('./../data/mockRecipe.json');
      setTimeout(() => {
        setRecipe(data);
      }, 50);
    }

    getData();
  }, []);

  return (
    <main className={styles.main}>
      {recipe ? <Recipe {...recipe} /> : 'Loading...'}
    </main>
  );
};

export default App;
