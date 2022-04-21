import styled from 'styled-components';
import { HeroMenuData as Hero } from '@/helpers/types';

export const StyledSidedrawer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.1rem;
  height: 100%;
  padding-left: 24px;
  position: absolute;
  width: 100%;
  z-index: 3;
`;

export const StyledSidedrawerList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 220px;
`;

export const StyledSidedrawerItem = styled.li<{ isActive: boolean }>`
  button {
    align-items: center;
    display: flex;
    pointer-events: ${({ isActive }) => isActive && 'none'};

    > div {
      align-items: center;
      display: flex;
      justify-content: center;
      height: 34px;
      width: 60px;
    }

    &:hover {
      img {
        opacity: 1;
      }

      span {
        opacity: 1;
        transform: translateX(0px);
      }
    }
  }

  img {
    height: 28px;
    opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
    transition: opacity 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
    width: 32px;
  }

  span {
    margin-left: 8px;
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    transform: ${({ isActive }) => (isActive ? 'translateX(0px)' : 'translateX(15px)')};
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  &:nth-of-type(2) {
    img {
      height: 34px;
      width: 36px;
    }
  }

  &:nth-of-type(4) {
    img {
      height: 34px;
      width: 32px;
    }
  }
`;

type Props = {
  heroes: Hero[];
  onClick: (id: string) => void;
};

const Sidedrawer: React.FC<Props> = ({ heroes, onClick }) => (
  <StyledSidedrawer>
    <StyledSidedrawerList>
      {heroes.map((hero) => (
        <StyledSidedrawerItem key={hero.id} isActive={hero.active}>
          <button onClick={() => onClick(hero.id)}>
            <div>
              <img src={hero.logoPath} alt={`${hero.name} icon`} />
            </div>
            <span>{hero.name}</span>
          </button>
        </StyledSidedrawerItem>
      ))}
    </StyledSidedrawerList>
  </StyledSidedrawer>
);

export default Sidedrawer;