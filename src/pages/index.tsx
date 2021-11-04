import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import VercelLogo from '../assets/vercel.svg';
import styles from '../styles/Home.module.scss';

const Home: React.FC = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  return (
    <div>
      <Head>
        <title>Home page</title>
      </Head>

      <Image src={VercelLogo} />
      <h1>Template Next.js</h1>
      <p>Preparado com SASS, importação de imagens, temas, eslint e prettier</p>

      <div className={styles.buttonContainer}>
        <h4>The current theme is: {theme}</h4>
        <button type="button" onClick={() => setTheme(systemTheme ?? 'light')}>
          Usar padrão do sistema
        </button>
        <button type="button" onClick={() => setTheme('light')}>
          Claro
        </button>
        <button type="button" onClick={() => setTheme('meio-dark')}>
          Meio Escuro
        </button>
        <button type="button" onClick={() => setTheme('dark')}>
          Escuro
        </button>
      </div>
    </div>
  );
};

export default Home;
