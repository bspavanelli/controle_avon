import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: var(--grayMedium);
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
  height: 40px;
  margin-left: 10px;
`;

export const MenuContainer = styled.ul`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const MenuItem = styled.li`
  padding: 10px;
`;
