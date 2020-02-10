import React from 'react';
import { kebabCase } from 'lodash-es';
import './Row.css'

const formatWallText = (value) => {
  if (typeof value === 'string') {
    return `Wall (${value})/Box`;
  }
  return value ? 'Wall/Box' : 'Box only'
};

const TYPES_SINGULAR = {
  'Assault Rifles': 'Assualt Rifle',
  'LMGs': 'LMG',
  'Secondaries': 'Secondary',
  'Sniper Rifles': 'Sniper Rifle',
  'Submachine Guns': 'Submachine Gun',
  'Tactical Rifles': 'Tactical Rifle'
};

const formatType = (value) => {
  if (!TYPES_SINGULAR[value]) {
    throw new Error(`Cannot find value: ${value}`);
  }
  return TYPES_SINGULAR[value];
}

export const Row = (props) => {
  const id = kebabCase(props.data.name);
  return (
    <div id={ id } className="Row">
      <div>
        <a href={ `#${id}` } className="Row-anchor">
          <strong>{ props.data.name }</strong>
        </a>
      </div>
      <div>
        <p>Category: {formatType(props.data.type)}</p>
        <p>Unlock: { props.data.unlock_level }</p>
        <p>Max Level: { props.data.levels }</p>
        <p>Starter: {props.data.starter ? 'Yes' : 'No' }</p>
        <p>{formatWallText(props.data.wall) }</p>
      </div>
    </div>
  );
};

export default Row;