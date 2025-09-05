import Link from 'next/link';

const KakaoPage = () => {
  const containerStyle: React.CSSProperties = {
    padding: '2rem',
    textAlign: 'center',
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

  const contentStyle: React.CSSProperties = {
    fontSize: '1.1rem',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
  };

  const linkStyle: React.CSSProperties = {
      display: 'inline-block',
      marginTop: '1rem',
      padding: '0.8rem 1.5rem',
      backgroundColor: '#FEE500',
      color: '#3C1E1E',
      borderRadius: '8px',
      fontWeight: 'bold',
      textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>카카오톡 채널 안내</h1>
      <div style={contentStyle}>
        <p>과천시중소기업협의회 카카오톡 채널을 추가하고 새로운 소식을 받아보세요.</p>
        <Link href="#" style={linkStyle}>
          카카오톡 채널 바로가기
        </Link>
        <p style={{ marginTop: '1rem', color: '#777' }}>
            (실제 링크로 교체될 예정입니다.)
        </p>
      </div>
    </div>
  );
};

export default KakaoPage;
