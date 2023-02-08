import React from 'react';

function useLocalStorage(itemName, initValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initValue);
  const [sincronizedItem, setSincronizedItem] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        const parsedItem = !localStorageItem || localStorageItem === '' ? initValue : JSON.parse(localStorageItem);
        setItem(parsedItem)
        setLoading(false);
        setSincronizedItem(true);
      } catch(err) {
        setLoading(false);
        setError(true);
      }
    }, 3000);
  }, [sincronizedItem]);

  const sincronize = () => {
    setLoading(true);
    setSincronizedItem(false);
  }

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem)
  }

  return {
    item,
    saveItem,
    loading,
    error,
    sincronize
  };
}

export { useLocalStorage };