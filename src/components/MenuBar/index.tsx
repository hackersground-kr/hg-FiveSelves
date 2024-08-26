import Alarm from 'assets/icon/Alarm';
import Home from 'assets/icon/Home';
import Profile from 'assets/icon/Profile';
import Register from 'assets/icon/Register';
import { theme } from 'lib/utils/style/theme';
import * as _ from './style';
import { useNavigate } from 'react-router-dom';

interface MenuBarProps {
  selectState: number;
  setSelectState: (id: number) => void;
}

const MenuBar = ({ selectState, setSelectState }: MenuBarProps) => {
  const navigate = useNavigate();
  const menuItems = [
    { id: 1, label: '홈', Icon: Home, location: '/' },
    { id: 2, label: '등록하기', Icon: Register, location: '/' },
    { id: 3, label: '알림', Icon: Alarm, location: '/' },
    { id: 4, label: '프로필', Icon: Profile, location: '/' }
  ];

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
