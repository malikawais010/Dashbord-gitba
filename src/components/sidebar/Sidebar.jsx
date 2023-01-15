import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import Face3Icon from '@mui/icons-material/Face3';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import Person3Icon from '@mui/icons-material/Person3';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';

const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext);


    return (
        <div className='sidebar'>
            <div className="top">
                <Link to="/" style={{textDecoration:"none"}}>
                <span className="logo">DASHBOARD</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className='icon' />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LIST</p>
                    <Link to="/users" style={{textDecoration:"none"}}>
                    <li>
                        <GroupOutlinedIcon className='icon' />
                        <span>Users</span>
                    </li>
                </Link>
                <Link to="/products" style={{textDecoration:"none"}}>
                    <li>
                        <ProductionQuantityLimitsOutlinedIcon className='icon' />
                        <span>Products</span>
                    </li>
                </Link>
                    <li>
                        <BorderColorOutlinedIcon className='icon' />
                        <span>Orders</span>
                    </li>
                    <li>
                        <DeliveryDiningOutlinedIcon className='icon' />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFULL</p>
                    <li>
                        <QueryStatsOutlinedIcon className='icon' />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsActiveOutlinedIcon className='icon' />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVIES</p>

                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className='icon' />
                        <span>System Heath</span>
                    </li>
                    <li>
                        <Face3Icon className='icon' />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className='icon' />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>

                    <li>
                        <Person3Icon className='icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className='icon'    />
                        <span>logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
                <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
            </div>
        </div>
    )
}

export default Sidebar
