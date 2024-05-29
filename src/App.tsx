import { useEffect, useState } from 'react';
import * as styles from './App.css.ts';
import Recipe, { IRecipe } from './components/Recipe.tsx';
import './cssReset.css';
import './styles.css.ts';
import './theme.css.ts';

const App = () => {
  const [recipe, setRecipe] = useState<IRecipe | null>(null);

  useEffect(() => {
    async function getData() {
      const data: IRecipe = await import('./../data/mockRecipe.json');
      setTimeout(() => {
        setRecipe(data);
      }, 1000);
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
