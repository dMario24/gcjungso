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
  };

  const placeholderMembers = [
    { id: 1, name: '회원사 A' },
    { id: 2, name: '회원사 B' },
    { id: 3, name: '회원사 C' },
    { id: 4, name: '회원사 D' },
    { id: 5, name: '회원사 E' },
    { id: 6, name: '회원사 F' },
  ];

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>회원사 소개</h1>
      <div style={memberListStyle}>
        {placeholderMembers.map((member) => (
          <div key={member.id} style={memberCardStyle}>
            <p><strong>{member.name}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembersPage;
