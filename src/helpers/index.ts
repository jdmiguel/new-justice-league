import { HeroData, HeroId } from '@/helpers/types';

export const splitHeadingIntoChars = (target: HTMLHeadingElement | null) => {
  if (!target) {
    return;
  }

  const createSpan = () => {
    const span = document.createElement('span');
    span.style.display = 'inline-block';
    return span;
  };

  const split = (target: HTMLHeadingElement) => {
    const currentTarget = target;
    const chars: HTMLSpanElement[] = [];
    const splittedTarget = currentTarget?.textContent?.split(' ');

    splittedTarget?.map((word: string) => {
      word.split(/(?!^)/).map((char) => {
        const el = createSpan();
        el.innerText = char;
        el.style.opacity = '0';
        currentTarget.appendChild(el);
        chars.push(el);
      });
    });

    currentTarget.innerHTML = '';

    chars.forEach((char) => {
      currentTarget.appendChild(char);
    });

    return currentTarget.querySelectorAll('span');
  };

  return split(target);
};

export const defaultHeroId = 'superman';
export const getHero = (heroData: HeroData, id: HeroId): string => heroData[id || defaultHeroId];
