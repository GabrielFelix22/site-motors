'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

export function Submenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function taggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <section className={styles.submenu}>
      <div className={styles.submenuIcon} onClick={taggleMenu}>
        <Menu size={34} color="#121212" />
        Menu
      </div>

      <ul className={`${styles.ul} ${isOpen ? styles.open : ''}`}>
        {isOpen && (
          <button onClick={taggleMenu} className={styles.closeButton}>
            <X size={54} color="#121212" />
          </button>
        )}

        <li>
          <Link href="/post/pagina-1">Página 1</Link>
        </li>
        <li>
          <Link href="/post/pagina-2">Página 2</Link>
        </li>
      </ul>
    </section>
  );
}
