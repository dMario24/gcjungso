'use client';
import { Tree, TreeNode } from 'react-organizational-chart';

const nodeStyle: React.CSSProperties = {
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  display: 'inline-block',
  border: '1px solid #ddd',
  backgroundColor: '#f9f9f9',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const Node = ({ text }: { text: string }) => <div style={nodeStyle}>{text}</div>;

const OrgChart = () => {
  return (
    <Tree
      lineWidth={'2px'}
      lineColor={'#ddd'}
      lineBorderRadius={'10px'}
      label={<Node text='준비위원장(박정원)' />}
    >
      <TreeNode label={<Node text='부회장' />}>
        <TreeNode label={<Node text='분과위원회' />} />
      </TreeNode>
      <TreeNode label={<Node text='감사' />} />
      <TreeNode label={<Node text='준비위원 사무국장(민경국)' />}>
        <TreeNode label={<Node text='총무위원회' />} />
        <TreeNode label={<Node text='기획위원회' />} />
        <TreeNode label={<Node text='홍보위원회' />} />
      </TreeNode>
    </Tree>
  );
};

export default OrgChart;
