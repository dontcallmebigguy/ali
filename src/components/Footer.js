import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer>
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li key={url}>cat
              {/* <a href={url} className={`icon ${icon}`}> */}
              <i class="fa fa-car" style={{color: red}}></i>
                <span className="label">{name}</span>
              {/* </a> */}
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
