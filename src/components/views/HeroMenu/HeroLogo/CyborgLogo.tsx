import { theme } from '@/helpers/theme';
import { StyledHeroLogoSvg, StyledHeroLogoPath } from '@/components/views/HeroMenu/styles';

type Props = {
  isHighlighted: boolean;
  isFaded: boolean;
};

const CyborgLogo: React.FC<Props> = ({ isHighlighted, isFaded }) => (
  <StyledHeroLogoSvg
    x="0px"
    y="0px"
    width="500px"
    height="500px"
    viewBox="0 0 500 500"
    enableBackground="new 0 0 500 500"
    xmlSpace="preserve"
    isHighlighted={isHighlighted}
    isFaded={isFaded}
  >
    <StyledHeroLogoPath
      stroke={theme.darkRed}
      strokeWidth="2"
      strokeMiterlimit="10"
      fill={theme.alphaDark_75}
      d="M250.073-0.311c-138.07,0-250,111.929-250,250c0,138.071,111.93,250,250,250c138.071,0,250-111.93,250-250C500.073,111.618,388.144-0.311,250.073-0.311z M449.947,274.65c-2.25,15.94-6.042,31.476-11.91,46.476c-12.291,31.406-31.268,58.054-56.909,79.872c-24.128,20.532-51.613,34.573-82.355,42.136c-17.518,4.31-35.32,6.399-53.34,5.749c-48.626-1.753-91.562-18.364-128.154-50.632c-25.055-22.096-43.383-49.003-54.984-80.434c-6.39-17.315-10.212-35.177-11.653-53.598c-2.689-34.379,3.096-67.316,17.309-98.587c18.569-40.855,47.675-72.152,87.109-93.571c18.858-10.242,38.984-16.889,60.148-20.389c6.544-1.083,13.13-1.742,19.738-2.234c0.475-0.035,1.071,0.203,1.365-0.438c5.665,0,11.329,0,16.992,0.001 c2.377,0.938,4.913,0.602,7.364,0.802c12.709,1.044,25.238,3.072,37.582,6.289c29.856,7.782,56.693,21.521,80.378,41.314c18.355,15.337,33.559,33.398,45.553,54.167c10.446,18.089,17.883,37.331,22.501,57.693c1.336,5.895,2.264,11.863,3.271,17.818c0.28,1.651-0.67,1.467-1.659,1.481c-8.196,0.114-16.389,0.236-24.58,0.354c-8.717,0.127-17.433,0.196-26.146,0.424c-1.82,0.047-2.561-0.454-3-2.261c-4.267-17.532-10.181-34.467-18.684-50.412c-10.448-19.586-24.125-36.386-42.62-48.933c-18.658-12.659-39.461-19.265-61.682-21.828c-12.165-1.403-24.364-1.828-36.577-0.933c-16.377,1.2-31.865,5.765-46.596,12.952c-26.826,13.089-48.323,32.28-64.598,57.305c-11.588,17.816-19.057,37.245-21.647,58.433c-3.047,24.913,0.907,48.837,10.905,71.704c13.891,31.771,36.232,56.027,66.329,73.016c16.245,9.169,33.687,14.944,52.233,17.282c28.707,3.616,56.318-0.405,82.508-12.662c35.465-16.597,60.67-43.04,74.487-80.013c3.354-8.977,5.643-18.234,6.847-27.738c0.259-2.033,0.969-2.631,3.047-2.599c16.609,0.253,33.222,0.372,49.831,0.521C449.349,273.187,450.181,272.992,449.947,274.65z"
      isHighlighted={isHighlighted}
      heroColor={theme.darkRed}
    />
  </StyledHeroLogoSvg>
);
export default CyborgLogo;
