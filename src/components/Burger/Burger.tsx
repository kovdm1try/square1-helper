import { type FC, type ReactNode, useEffect, useRef, useState } from 'react';

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

  const handleItemClick = (item: BurgerMenuItem) => {
    item.action();
    if (!item.noClose) setIsOpen(false);
  };

  return (
    <>
      <div className={`${styles.burger} ${isOpen ? styles.burgerFixed : ''}`}>
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
        <div className={styles.overlay} onClick={() => setIsOpen(false)}>
          <nav className={styles.menu} onClick={(e) => e.stopPropagation()}>
            {items.map((item) => (
              <button
                key={item.label}
                className={`${styles.menuItem} ${item.noClose ? styles.menuItemSeparated : ''}`}
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
