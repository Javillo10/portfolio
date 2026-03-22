import React from 'react';
import './BotonRedSocial.css'

const BotonRedSocial = ({children, enlace}) => {
  return (
    <a href={enlace}>
        <button className="Btn">
            {children}
        </button>
    </a>
  );
}

export default BotonRedSocial;