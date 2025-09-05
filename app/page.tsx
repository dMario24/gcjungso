import Image from 'next/image';

export default function Home() {
  const containerStyle: React.CSSProperties = {
    textAlign: 'center',
    paddingTop: '50px',
    paddingBottom: '50px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '1.2rem',
    color: '#555',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>과천시중소기업협의회에 오신 것을 환영합니다.</h1>
      <p style={subtitleStyle}>
        과천시의 중소기업들과 함께 성장하며 지역 경제 발전에 기여합니다.
      </p>
    </div>
  );
}
