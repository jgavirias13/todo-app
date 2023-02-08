import React from 'react';
import { withStorageListener } from './withStorageLIstener';

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div>
        <p>Hubo cambios</p>;
        <button onClick={() => toggleShow(false)}>Refrescar</button>
      </div> 
    );
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };