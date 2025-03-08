'use client';

import { useCallback } from 'react';
import { classNames } from '@shared/lib/classNames';
import { appState } from '@entities/App';
import styles from './Hamburger.module.scss';

type HamburgerProps = {
  className?: string;
};

const Hamburger = ({ className, ...otherProps }: HamburgerProps) => {
  const { isMobileNav, set } = appState();

  const handleToggleMenu = useCallback(() => {
    set({ isMobileNav: !isMobileNav });
  }, [set, isMobileNav]);

  return (
    <button
      type={'button'}
      className={classNames(styles.hamburger, { [styles.open]: isMobileNav }, [className])}
      onClick={handleToggleMenu}
      {...otherProps}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default Hamburger;
