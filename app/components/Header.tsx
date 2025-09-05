"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isIntroOpen, setIsIntroOpen] = useState(false);

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    borderBottom: '1px solid #eaeaea',
    backgroundColor: '#ffffff',
  };

  const navStyle: React.CSSProperties = {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  };

  const linkStyle: React.CSSProperties = {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
    position: 'relative',
  };

  const dropdownStyle: React.CSSProperties = {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: 'white',
    border: '1px solid #eaeaea',
    borderRadius: '5px',
    padding: '0.5rem 0',
    display: isIntroOpen ? 'block' : 'none',
    zIndex: 10,
  };

  const dropdownItemStyle: React.CSSProperties = {
      display: 'block',
      padding: '0.5rem 1rem',
      color: '#333',
      textDecoration: 'none',
  };

  return (
    <header style={headerStyle}>
      <Link href="/">
        <Image src="/logo_gcjungso.png" alt="과천시중소기업협의회 로고" width={150} height={40} priority />
      </Link>
      <nav style={navStyle}>
        <div
          onMouseEnter={() => setIsIntroOpen(true)}
          onMouseLeave={() => setIsIntroOpen(false)}
          style={{ position: 'relative' }}
        >
          <button style={{...linkStyle, background: 'none', border: 'none', cursor: 'pointer'}}>
            소개
          </button>
          <div style={dropdownStyle}>
            <Link href="/greeting" style={dropdownItemStyle}>회장인사말</Link>
            <Link href="/organization" style={dropdownItemStyle}>조직도</Link>
          </div>
        </div>
        <Link href="/members" style={linkStyle}>회원사</Link>
        <Link href="/kakao" style={linkStyle}>카카오톡채널</Link>
      </nav>
    </header>
  );
};

export default Header;
