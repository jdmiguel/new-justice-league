import { HeroMenuData } from '@/helpers/types';
import { StyledHeroBg } from '@/components/views/HeroMenu/styles';

type Props = {
  heroes: HeroMenuData[];
  isDarkened: boolean;
};

const HeroBg: React.FC<Props> = ({ heroes, isDarkened }) => (
  <>
    {heroes.map((hero) => (
      <StyledHeroBg
        key={hero.id}
        bgPath={hero.bgImagePath}
        isActive={hero.active}
        isDarkened={isDarkened}
      />
    ))}
  </>
);

export default HeroBg;
