import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Social from './Social';
import { useRouter } from 'next/router';
import MobileMenu from './MobileMenu';

const links = [
  { href: '/competitions', label: 'Competitions' },
  { href: '/issues', label: 'Issues' },
  { href: '/artists', label: 'Artists' },
  { href: '/jurors', label: 'Jurors' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 700;
  /* space taken on header */
  @media (min-width: 1250px) {
    flex-basis: 40%;
    a {
      font-size: 2rem;
    }
  }

  @media (min-width: 769px) {
    flex-basis: 50%;
    /* correct injection from styled components */
    padding-left: 20px;

    li {
      list-style: none;
    }
    a {
      color: ${props => props.theme.primary};
      font-size: 1.5rem;
    }

    a:hover {
      color: ${props => props.theme.highlight};
    }
  }

  @media (max-width: 850px) {
    display: none;
  }
`;

const Nav = () => {
  return (
    <StyledList>
      {links.map(({ key, href, label }) => {
        return (
          <li key={key}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        );
      })}
    </StyledList>
  );
};

export default Nav;
