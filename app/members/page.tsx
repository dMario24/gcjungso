'use client'; // Next.js App Router에서 이벤트/상호작용을 쓰려면 필요

import React from 'react';

const MembersPage = () => {
  const containerStyle: React.CSSProperties = {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: 'bold',
    borderBottom: '2px solid #ddd',
    paddingBottom: '0.5rem',
    marginBottom: '1.5rem',
  };

  const memberListStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '1.5rem',
  };

  const memberCardStyle: React.CSSProperties = {
    border: '1px solid #eaeaea',
    borderRadius: '8px',
    padding: '1rem',
    textAlign: 'center',
    backgroundColor: '#fff',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  };

  const placeholderMembers = [
    {
      id: 1,
      name: '(주)위드네트',
      ceo: '홍길동',
      website: 'https://withnet.co.kr',
      product: '토탈 네트워크 & 인프라 솔루션',
    },
    {
      id: 2,
      name: '디지노리',
      ceo: '민경국',
      website: 'https://diginori.com',
      product: 'AI & 데이터 솔루션',
    },
  ];

  return (
    <>
      <div style={containerStyle}>
        <h1 style={titleStyle}>회원사 소개</h1>
        <div style={memberListStyle}>
          {placeholderMembers.map((member) => (
            <a
              key={member.id}
              href={member.website}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="member-card" style={memberCardStyle}>
                <p><strong>{member.name}</strong></p>
                {/* <p>대표: {member.ceo}</p> */}
                <p>{member.product}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div style={containerStyle}>
        <h1 style={titleStyle}>상위기관</h1>
        <div style={memberListStyle}>
          <div style={memberCardStyle}>
            <p><strong>과천시 기업협의회</strong></p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .member-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
      `}</style>
    </>
  );
};

export default MembersPage;
