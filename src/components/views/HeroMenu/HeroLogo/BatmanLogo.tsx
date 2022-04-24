import { theme } from '@/helpers/theme';
import { StyledSvg, StyledPath } from '@/components/views/HeroMenu/HeroLogo/styles';

type Props = {
  isHighlighted: boolean;
  isFaded: boolean;
};

const BatmanLogo: React.FC<Props> = ({ isHighlighted, isFaded }) => (
  <StyledSvg
    x="0px"
    y="0px"
    stroke={theme.grey}
    strokeWidth="7"
    fill="none"
    width="500px"
    height="500px"
    viewBox="0 0 500 500"
    enableBackground="new 0 0 500 500"
    xmlSpace="preserve"
    isHighlighted={isHighlighted}
    isFaded={isFaded}
  >
    <StyledPath
      stroke={theme.grey}
      strokeWidth="2"
      strokeMiterlimit="10"
      fill={theme.alphaDark_75}
      d="M489.229,176.678c7.043,23.098,10.844,47.609,10.844,73.011c0,138.071-111.929,250-250,250s-250-111.929-250-250c0-24.563,3.559-48.292,10.161-70.717c6.769,4.433,13.144,9.373,18.86,15.127c15.34,15.44,21.73,34.081,19.505,55.617c-0.579,5.596-2.113,11.093-3.234,16.742c-0.037,0.003-0.074,0.005-0.111,0.008c-0.013,0.001-0.024-0.003-0.037-0.005c-0.103-0.039-0.065-0.011,0,0c0.032,0.012,0.07,0.026,0.136,0.057c0.004-0.02,0.008-0.039,0.012-0.06c3.603-0.235,7.204-0.517,10.811-0.719c25.862-1.424,51.706-1.601,77.486,1.449c14.974,1.771,29.74,4.56,43.989,9.599c29.512,10.43,50.818,29.853,63.206,58.669c2.986,6.948,4.937,14.336,7.273,21.252c0.147-0.586,0.411-1.621,0.661-2.659c4.504-18.823,12.561-35.797,25.851-50.1c15.507-16.687,34.996-26.076,56.792-31.386c16.863-4.105,33.993-6.245,51.275-7.171c21.441-1.152,42.881-0.789,64.298,0.873c1.451,0.111,2.912,0.159,4.599,0.248c-0.343-0.943-0.594-1.656-0.86-2.364c-2.843-7.549-4.61-15.329-4.747-23.408c-0.27-16.177,5.725-29.979,16.311-41.924C470.165,189.959,479.35,182.849,489.229,176.678z M151.536,148.387c4.111,0,5.593,1.262,6.522,5.513c1.73,7.905,3.987,15.619,7.904,22.765c2.263,4.125,5.367,7.256,9.845,8.979c13.42,5.168,27.167,8.711,41.668,8.596c5.365-0.043,6.984-0.847,8.257-6.098c1.562-6.441,2.701-13.029,3.39-19.623c0.856-8.202,1.065-16.475,1.583-25.226c2.879,11.095,5.652,21.777,8.477,32.659c5.927-1.571,11.621-1.598,17.624,0.007c2.72-10.84,5.405-21.531,8.09-32.225c0.228,0.01,0.454,0.021,0.683,0.03c0,3.206-0.119,6.415,0.019,9.616c0.455,10.556,0.926,21.136,3.513,31.435c2.681,10.656,4.629,9.693,12.193,9.334c13.398-0.636,26.299-3.798,38.854-8.46c4.576-1.697,7.732-4.86,10.033-9.037c3.807-6.911,5.98-14.39,7.763-22.014c0.288-1.238,0.636-2.485,1.15-3.642c0.704-1.585,2.046-2.413,3.789-2.53c0.826-0.056,1.661-0.08,2.493-0.08c44.431-0.003,88.861-0.002,133.292-0.003C439.804,60.79,352.08-0.311,250.073-0.311c-102.01,0-189.736,61.104-228.609,148.701C64.821,148.388,108.179,148.384,151.536,148.387z"
      isHighlighted={isHighlighted}
      heroColor={theme.grey}
    />
  </StyledSvg>
);

export default BatmanLogo;