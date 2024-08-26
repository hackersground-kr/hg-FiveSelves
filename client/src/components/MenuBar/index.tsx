import Alarm from 'assets/icon/Alarm';
import Home from 'assets/icon/Home';
import Profile from 'assets/icon/Profile';
import Register from 'assets/icon/Register';
import { theme } from 'lib/utils/style/theme';
import * as _ from './style';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MenuBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { id: 1, label: '홈', Icon: Home, location: '/' },
    { id: 2, label: '등록하기', Icon: Register, location: '/upload' },
    { id: 3, label: '알림', Icon: Alarm, location: '/notification' },
    { id: 4, label: '프로필', Icon: Profile, location: '/profile/:id' }
  ];

  const getCurrentTab = () => {
    const currentItem = menuItems.find((item) => {
      return item.location === '/'
        ? location.pathname === item.location
        : location.pathname.startsWith(item.location);
    });
    return currentItem ? currentItem.id : 1;
  };

  const [selectState, setSelectState] = useState(getCurrentTab());

  useEffect(() => {
    setSelectState(getCurrentTab());
  }, [location.pathname]);

  const onTabClick = (id: number, location: string) => {
    navigate(location);
    setSelectState(id);
  };

  return (
    <_.MenuBar_Container>
      {menuItems.map(({ id, label, Icon, location }) => (
        <_.Menubar_Icon key={id} onClick={() => onTabClick(id, location)}>
          <Icon
            color={selectState === id ? theme.green[400] : theme.grey[500]}
          />
          <_.Menubar_Title select={selectState === id}>{label}</_.Menubar_Title>
        </_.Menubar_Icon>
      ))}
    </_.MenuBar_Container>
  );
};

export default MenuBar;
