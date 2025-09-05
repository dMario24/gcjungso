'use client';
import dynamic from 'next/dynamic';

const OrgChart = dynamic(() => import('../components/OrgChart'), {
  ssr: false,
});

const OrganizationPage = () => {
  const containerStyle: React.CSSProperties = {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: 'bold',
    borderBottom: '2px solid #ddd',
    paddingBottom: '0.5rem',
    marginBottom: '1.5rem',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>조직도</h1>
      <OrgChart />
    </div>
  );
};

export default OrganizationPage;