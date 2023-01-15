import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined'; 
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';

const Navbar = () => {
  const {dispatch} = useContext(DarkModeContext);

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='search...' />
          <SearchIcon className="icon"/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon"/>
            English
          </div>
          <div className="item">
           <DarkModeOutlinedIcon className="icon" onClick={()=>dispatch({type:"TOGGLE"})}/>
          </div>
          <div className="item">
           <FullscreenExitOutlinedIcon className="icon"/>
          </div>
          <div className="item">
           <NotificationsNoneOutlinedIcon className="icon"/>
           <div className="counter">1</div>
          </div>
          <div className="item">
           <ChatBubbleOutlineOutlinedIcon className="icon"/>
           <div className="counter">2</div>
          </div>
          <div className="item">
           <FilterListOutlinedIcon className="icon"/>
          </div>
          <div className="item">
              <img src="https://images.pexels.com/photos/5800782/pexels-photo-5800782.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt='' className='avatar'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
