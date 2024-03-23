import { useDispatch } from 'react-redux';

import { useAuth } from '../../hooks/useAuth';
import { logOut } from '../../redux/auth/operations';
import { LogoutBtn, UserName, Wrap } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Wrap>
      <UserName>Welcome, {user.name}</UserName>
      <LogoutBtn type="button" onClick={() => dispatch(logOut())}>
        Log out
      </LogoutBtn>
    </Wrap>
  );
};

export default UserMenu;
