const GreetingPage = () => {
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

  const contentStyle: React.CSSProperties = {
    fontSize: '1.1rem',
    lineHeight: '1.8',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>회장 인사말</h1>
      <div style={contentStyle}>
        <p>
          과천시중소기업협의회(준) 방문해주신 여러분을 진심으로 환영합니다.
        </p>
        <p>
          우리 협의회는 과천시 중소기업의 권익을 보호하고 상호 간의 협력을 증진하여 지역 경제 발전에 기여하는 것을 목표로 하고 있습니다.
        </p>
        <p>
          앞으로도 회원사 여러분의 목소리에 귀 기울이며, 함께 성장하고 발전하는 협의회가 되도록 최선을 다하겠습니다.
        </p>
        <p>
          감사합니다.
        </p>
        <br />
        <p>
          <strong>과천시 중소기업협의회 준비위원장 박정원</strong>
        </p>
      </div>
    </div>
  );
};

export default GreetingPage;
