import React, { useContext } from 'react';
import Head from 'next/head';

import ThemeButton from '../components/ThemeButton';

import VercelLogo from '../assets/vercel.svg';

import styles from '../styles/pages/Home.module.scss';

import {
  DEFAULT_THEME,
  DARK_THEME,
  LIGHT_THEME,
  ThemeContext,
} from '../contexts/ThemeContext';

const Home: React.FC = () => {
  const { globalTheme } = useContext(ThemeContext);

  return (
    <div className={`${styles.container} ${styles[globalTheme]}`}>
      <Head>
        <title>Home page</title>
      </Head>

      <VercelLogo style={{ background: '#fff' }} />
      <h1 className={`${styles[globalTheme]}`}>Template Next.js</h1>
      <p>Preparado com SASS, importação de imagens, temas, eslint e prettier</p>
      <div>
        <ThemeButton changeTheme={DEFAULT_THEME}>Default</ThemeButton>
        <ThemeButton changeTheme={DARK_THEME}>Dark</ThemeButton>
        <ThemeButton changeTheme={LIGHT_THEME}>Light</ThemeButton>
      </div>
    </div>
  );
};

export default Home;
