export type HeroData = {
  superman: string;
  batman: string;
  wonderwoman: string;
  flash: string;
  greenlantern: string;
  aquaman: string;
  greenarrow: string;
  cyborg: string;
};

export type HeroId = keyof HeroData;

export type HeroMenuData = {
  id: HeroId;
  name: string;
  active: boolean;
};

export type PageId = 'root' | 'profile' | 'timeline' | 'media';

export type ProfileIntroData = {
  semiTransparentColor: string;
  imgPath: string;
  title: string;
  subtitle: string;
  description: string;
};

export type ProfileDetailsData = {
  semiTransparentColor: string;
  color: string;
  imgPath: string;
  fullName: string;
  birthPlace: string;
  occupation: string;
  base: string;
  firstAppearance: string;
};
