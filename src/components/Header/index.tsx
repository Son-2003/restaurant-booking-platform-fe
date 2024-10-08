import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="w-full h-[80px] md:h-[100px] bg-[#312525] fixed top-0 left-0 z-50">
        <div className="max-w-[90%] md:max-w-[80%] mx-auto h-full flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-4">
            <Link to="/" onClick={handleLinkClick}>
              <img
                className="w-[150px] h-auto"
                src="https://res.cloudinary.com/dnslrwedn/image/upload/v1727033229/SKEDEAT_logo_tr%E1%BA%AFng-01_rrkx3o.png"
                alt="Logo"
              />
            </Link>
            <nav
              className={`md:flex space-x-4 md:space-x-10 ml-0 ${isMenuOpen ? 'flex' : 'hidden'} md:block flex-col md:flex-row absolute md:static left-0 top-[80px] w-full md:w-auto bg-[#312525] md:bg-transparent`}
              style={{ marginLeft: '0px' }}
            >
              <a href=""></a>
              <Link
                to="/restaurant"
                className={`text-lg md:text-xl p-4 md:p-0 ${location.pathname === '/restaurant' ? 'text-[#D86500]' : 'text-white'} hover:text-[#D86500]`}
                onClick={handleLinkClick}
              >
                Gần bạn
              </Link>
              <Link
                to="/#"
                className="text-white text-lg md:text-xl hover:text-[#D86500] p-4 md:p-0"
                onClick={handleLinkClick}
              >
                Sự kiện
              </Link>

              <Link
                to="/blog"
                className={`text-lg md:text-xl p-4 md:p-0 ${location.pathname === '/blog' ? 'text-[#D86500]' : 'text-white'} hover:text-[#D86500]`}
                onClick={handleLinkClick}
              >
                Blogs
              </Link>
              <Link
                to="/about-us"
                className={`text-lg md:text-xl p-4 md:p-0 ${location.pathname === '/about-us' ? 'text-[#D86500]' : 'text-white'} hover:text-[#D86500]`}
                onClick={handleLinkClick}
              >
                Về chúng tôi
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="hidden md:flex items-center flex-grow mx-4">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="w-full p-2 text-black placeholder-gray-400 rounded-md"
              />
            </div>
            <Link
              to="/signin"
              className={`text-lg md:text-xl ${location.pathname === '/signin' ? 'text-[#D86500]' : 'text-white'} hover:text-[#D86500]`}
            >
              Đăng nhập
            </Link>
            <Link to="/user">
              <div className="w-[40px] md:w-[50px] h-[40px] md:h-[49px] bg-[#d9d9d9] rounded-full flex items-center justify-center">
                <UserOutlined style={{ fontSize: '24px' }} />
              </div>
            </Link>

            <button
              className="md:hidden text-white text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? '✖️' : '☰'}
            </button>
          </div>
        </div>
      </header>
      <div className="h-[80px] md:h-[100px]"></div>
    </>
  );
}
