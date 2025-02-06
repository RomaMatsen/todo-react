import React, { useState, useEffect, useRef } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);  // Ссылка на випадаючий список

  // Закриття списку при натисканні поза межами
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Додаємо обробник події
    document.addEventListener('mousedown', handleClickOutside);

    // Очищаємо обробник після розмонтування компонента
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Закрити список' : 'Відкрити список'}
      </button>

      {isOpen && (
        <div ref={dropdownRef} className="dropdown-menu">
          <ul>
            <li>Опція 1</li>
            <li>Опція 2</li>
            <li>Опція 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

/*
.dropdown-menu {
  position: absolute;
  top: 40px;
  left: 0;
  border: 1px solid #ccc;
  background-color: white;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
*/