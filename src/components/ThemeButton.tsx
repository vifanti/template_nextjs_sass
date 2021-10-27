import React, { ButtonHTMLAttributes, useContext } from 'react';
import styles from './ThemeButton.module.scss';
import { ThemeContext } from '../contexts/ThemeContext';

type ThemeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  changeTheme: string;
};

const ThemeButton: React.FC<ThemeButtonProps> = ({
  changeTheme,
  children,
  ...rest
}) => {
  const { globalTheme, setGlobalTheme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      className={`${styles.button} ${styles[globalTheme]}`}
      onClick={() => setGlobalTheme(changeTheme)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ThemeButton;
