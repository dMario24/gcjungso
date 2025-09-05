const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4 text-center md:text-left">
        <div className="md:flex md:justify-between md:items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">과천시중소기업협의회</h2>
            <p className="text-sm">주소: 경기도 과천시 과천대로7길 65 과천상상자이타워 B동 126호</p>
            <p className="text-sm">대표전화: 02-3418-3007</p>
          </div>
          <div className="text-sm">
            {/* 소셜 미디어 링크나 다른 내용을 추가할 수 있습니다. */}
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} 과천시중소기업협의회. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
