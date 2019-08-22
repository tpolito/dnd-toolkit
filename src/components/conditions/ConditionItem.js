import React, { Fragment } from 'react';
import Markdown from 'markdown-to-jsx';

const ConditionItem = ({ condition }) => {
  const { name, desc } = condition;

  return (
    <Fragment>
      <li className="collection-item">
        <p>
          <strong>{name}</strong>
        </p>
        <p>
          <Markdown>{desc}</Markdown>
        </p>
      </li>
    </Fragment>
  );
};

export default ConditionItem;
