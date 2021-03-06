import styled from 'styled-components';
import { animation, ease } from '@/helpers/theme';

export const StyledTimelineWrapper = styled.main<{ heroLogoPath: string; isLeaving?: boolean }>`
  position: relative;
  min-height: calc(100vh - 85px);
  &:before {
    animation: ${animation.minFadeIn} 0.5s;
    background-image: ${({ heroLogoPath }) => `url(${heroLogoPath})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    content: '';
    display: block;
    height: 100%;
    opacity: ${({ isLeaving }) => (isLeaving ? 0 : 0.1)};
    position: absolute;
    transition: opacity 0.5s ${ease.smooth};
    width: 100%;
    z-index: 1;
  }
`;

export const StyledTimeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  margin: 0 auto;
  max-width: 100%;
  padding: 40px 30px;
  width: 900px;
  @media only screen and (min-width: 768px) {
    padding: 100px 30px 80px;
  }
  @media only screen and (min-width: 992px) {
    width: 960px;
  }
  @media only screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const StyledEvent = styled.div<{ isVisible: boolean }>`
  align-items: center;
  display: flex;
  gap: 50px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: all 0.5s ${ease.smooth};
  &:nth-of-type(odd) {
    transform: ${({ isVisible }) => (isVisible ? 'translateX(0)' : 'translateX(-120px)')};
  }
  &:nth-of-type(even) {
    transform: ${({ isVisible }) => (isVisible ? 'translateX(0)' : 'translateX(120px)')};
    @media only screen and (min-width: 768px) {
      align-self: flex-end;
    }
    > :nth-child(even) {
      @media only screen and (min-width: 768px) {
        order: 1;
      }
    }
    > :nth-child(odd) {
      @media only screen and (min-width: 768px) {
        order: 2;
      }
    }
  }
`;

export const StyledCard = styled.div<{ color: string }>`
  align-items: center;
  border: ${({ color }) => `4px solid ${color}`};
  border-radius: 16px;
  display: flex;
  gap: 26px;
  max-width: 100%;
  padding: 20px;
  width: 480px;
  @media only screen and (min-width: 1200px) {
    font-size: inherit;
    padding: 24px;
  }
`;

export const StyledCardImage = styled.img<{ semiTransparentColor: string }>`
  border-radius: 4px;
  box-shadow: ${({ semiTransparentColor }) => `0px 0px 12px 2px ${semiTransparentColor}`};
  height: 90px;
`;

export const StyledCardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const StyledCardTitle = styled.h4<{ color: string }>`
  color: ${({ color }) => color};
  font-size: 21px;
  font-weight: 700;
  @media only screen and (min-width: 1200px) {
    font-size: 22px;
  }
`;

export const StyledCardDescription = styled.p`
  font-size: 15px;
  line-height: 22px;
`;

export const StyledYearBubble = styled.div<{
  color: string;
  cardXPosition: 'left' | 'right';
  isFirst: boolean;
  isVisible: boolean;
}>`
  align-items: center;
  border: ${({ color }) => `4px solid ${color}`};
  border-radius: 50%;
  display: flex;
  font-size: 18px;
  height: 80px;
  justify-content: center;
  position: relative;
  width: 80px;
  &:before {
    background-color: ${({ color }) => color};
    content: '';
    height: 4px;
    left: -56px;
    position: absolute;
    width: 54px;
    @media only screen and (min-width: 768px) {
      left: ${({ cardXPosition }) => (cardXPosition === 'left' ? '-54px' : '76px')};
      width: 50px;
    }
  }
  &:after {
    background-color: ${({ color }) => color};
    content: '';
    display: ${({ isFirst }) => isFirst && 'none'};
    height: 94px;
    position: absolute;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transform: ${({ isVisible }) => (isVisible ? 'scaleY(1)' : 'scaleY(0)')};
    transform-origin: top;
    transition: all 0.5s ${ease.medium} 0.4s;
    width: 4px;
    top: -94px;
    @media only screen and (min-width: 768px) {
      height: 58px;
      top: -61px;
    }
    @media only screen and (min-width: 1200px) {
      height: 104px;
      top: -104px;
    }
  }
`;
