import React from 'react'
import { NavLink } from 'react-router-dom';

export default function FooterNavLinks({ footerColumn }) {
    const title = footerColumn.title;
    const link1 = footerColumn.linkText[0];
    const link2 = footerColumn.linkText[1];
    const link3 = footerColumn.linkText[2];
    const link4 = footerColumn.linkText[3];
    const to1 = footerColumn.to[0];
    const to2 = footerColumn.to[1];
    const to3 = footerColumn.to[2];
    const to4 = footerColumn.to[3];
  return (
    <div className="footerColumn">
      <h3>{title}</h3>
              <NavLink className="footerLink" to={to1}>
                {link1}
              </NavLink>
              <NavLink className="footerLink" to={to2}>
                {link2}
              </NavLink>
              <NavLink className="footerLink" to={to3}>
                {link3}
              </NavLink>
              <NavLink className="footerLink" to={to4}>
                {link4}
              </NavLink>
    </div>
  )
}
