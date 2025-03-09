'use client';

import { useCallback } from 'react';
import { classNames } from '@shared/lib/classNames';
import { appStore } from '@entities/App';
import styles from './Hamburger.module.scss';

type HamburgerProps = {
  className?: string;
};

const Hamburger = ({ className }: HamburgerProps) => {
  const { isMobileNav, set } = appStore();

  const handleToggleMenu = useCallback(() => {
    set({ isMobileNav: !isMobileNav });
  }, [isMobileNav, set]);

  return (
    <button
      type={'button'}
      className={classNames(styles.hamburger, { [styles.open]: isMobileNav }, [className])}
      onClick={handleToggleMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default Hamburger;
