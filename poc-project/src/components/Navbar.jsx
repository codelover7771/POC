import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { connect, useDispatch, useSelector} from 'react-redux';
import { setIndex, setMainMenu } from '../redux/actions';

const Navbar = ({ setMainMenu, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const dataIndex = useSelector((state)=>state.menuIndex)
  

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
      dispatch(setIndex(0));
      setMainMenu(data.mainmenu[dataIndex]);
  }, []);
    
  const renderNavLinks = () => {
    return data.mainmenu?.map((link, index) => (
        <>
      <Link
        key={index}
        to={link.path}
        onClick={() => {setMainMenu(link);dispatch(setIndex(index))}}
        className="block text-2xl mt-0 lg:inline-block  text-white hover:text-gray-300 mr-4"
      >
        {link.name}
      </Link>
      {
        index < data.mainmenu.length-1 
        ? 
        <AiOutlineArrowRight className='block text-lg mt-4 lg:inline-block  text-white hover:text-gray-300 mr-4'>
        </AiOutlineArrowRight>
         : null
      }
      </>
    ));
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white text-xl font-semibold">
              POC App
            </Link>
          </div>
          <div className="md:hidden">
            <button
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              onClick={toggleNavbar}
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {renderNavLinks()}
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {renderNavLinks()}
          </div>
        </div>
      )}
    </nav>
  );
};

const mapStateToProps = (state) => ({
  mainMenu: state.mainMenu,
  menuIndex: state.menuIndex
});

export default connect(mapStateToProps, { setMainMenu, setIndex })(Navbar);

