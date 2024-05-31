import { a, footer } from './Footer.css.ts';

export default function Footer() {
  return (
    <footer className={footer}>
      Challenge by{' '}
      <a
        href='https://www.frontendmentor.io?ref=challenge'
        target='_blank'
        rel='noopener noreferrer'
        className={a}
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a
        href='https://florianfrosch.de'
        target='_blank'
        rel='noopener noreferrer'
        className={a}
      >
        Florian Frosch
      </a>
      .
    </footer>
  );
}
