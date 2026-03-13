import { type FC, type ReactNode, useEffect, useRef, useState, useTransition } from 'react';

import classNames from 'classnames';

import styles from './Burger.module.scss';

export interface BurgerMenuItem {
  label: string;
  icon?: ReactNode;
  action: () => void;
  disabled?: boolean;
  noClose?: boolean;
}

interface BurgerMenuProps {
  items: BurgerMenuItem[];
}

const Burger: FC<BurgerMenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const savedScrollY = useRef(0);
  const isNavigating = useRef(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (!isPending && isNavigating.current) {
      isNavigating.current = false;
      setIsOpen(false); // eslint-disable-line react-hooks/set-state-in-effect
    }
  }, [isPending]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      savedScrollY.current = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${savedScrollY.current}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, savedScrollY.current);
    }
  }, [isOpen]);

  const closeAndNavigate = (action: () => void) => {
    isNavigating.current = true;
    startTransition(() => {
      action();
    });
  };

  const handleItemClick = (item: BurgerMenuItem) => {
    if (!item.noClose) {
      closeAndNavigate(item.action);
    } else {
      item.action();
    }
  };

  return (
    <>
      <div
        className={classNames(styles.burger, { [styles.burgerFixed]: isOpen })}
        onPointerDown={(e) => e.stopPropagation()}
      >
        <label className={styles.label}>
          <input type="checkbox" checked={isOpen} onChange={handleToggle} className={styles.input} />

          <svg className={styles.svg} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path className={styles.line1} d="M10 25h80" />
            <path className={styles.line2} d="M10 50h80" />
            <path className={styles.line3} d="M10 75h80" />
          </svg>
        </label>
      </div>

      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)} onPointerDown={(e) => e.stopPropagation()}>
          <nav className={styles.menu} onClick={(e) => e.stopPropagation()}>
            {items.map((item) => (
              <button
                key={item.label}
                className={classNames(styles.menuItem, { [styles.menuItemSeparated]: item.noClose })}
                onClick={() => handleItemClick(item)}
                disabled={item.disabled}
              >
                {item.icon ?? item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Burger;
