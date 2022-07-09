import { HeroMenuData as Hero, HeroId } from '@/helpers/types';
import {
  StyledSidedrawer,
  StyledSidedrawerList,
  StyledSidedrawerListItem,
} from '@/components/views/HeroMenu/styles';

type Props = {
  heroes: Hero[];
  isChangingHero: boolean;
  onClick: (id: HeroId) => void;
};

const Sidedrawer: React.FC<Props> = ({ heroes, isChangingHero, onClick }) => {
  const onClickItem = (heroId: HeroId) => {
    if (isChangingHero) {
      return;
    }

    onClick(heroId);
  };

  return (
    <StyledSidedrawer>
      <StyledSidedrawerList>
        {heroes.map((hero) => (
          <StyledSidedrawerListItem key={hero.id} isActive={hero.active}>
            <button onClick={() => onClickItem(hero.id)}>
              <div>
                <img src={hero.whiteLogoPath} alt={`${hero.name} icon`} />
              </div>
              <span>{hero.name}</span>
            </button>
          </StyledSidedrawerListItem>
        ))}
      </StyledSidedrawerList>
    </StyledSidedrawer>
  );
};

export default Sidedrawer;
