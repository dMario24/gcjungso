const OrganizationPage = () => {
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
    textAlign: 'center',
    padding: '2rem',
    border: '1px dashed #ccc',
    borderRadius: '8px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>조직도</h1>
      <div style={contentStyle}>
        <p>조직도 이미지가 여기에 표시될 예정입니다.</p>
        {/* Later, an <Image> tag can be placed here */}
      </div>
    </div>
  );
};

export default OrganizationPage;
