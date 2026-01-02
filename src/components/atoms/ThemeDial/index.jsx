import { forwardRef, useRef } from 'react';
import { useThemeContext } from '../../../styles/themes/ThemeContext';
import {
  DialWrapper,
  StyledDial,
  Pointer,
  Tooltip
} from './styles';

const BASE_TIME = 600;
const SNAP_TIME = 220;

const Dial = forwardRef(function Dial({ colors, ...props }, ref) {
  return <StyledDial ref={ref} $colors={colors} {...props} />;
});

export function ThemeDial() {
  const { themes, themeId, setNextTheme } = useThemeContext();

  const angle = 360 / themes.length;
  const dialRef = useRef(null);
  const locked = useRef(false);

  const activeIndex = themes.findIndex(t => t.id === themeId);
  const activeTheme = themes[activeIndex];

  const baseRotation = -(activeIndex * angle) - 60;

  console.log('baseRotation', baseRotation);
  
  const handleNextTheme = () => {
    console.log('baseRotation quando clica', baseRotation);
    if (locked.current || !dialRef.current) return;
    locked.current = true;

    const nextIndex = (activeIndex + 1) % themes.length;
    const nextRotation = -(nextIndex * angle) - 90;
    const overshoot = nextRotation - angle * 0.15;

    const dial = dialRef.current;

    dial.style.transition =
      `transform ${BASE_TIME}ms cubic-bezier(0.22, 1, 0.36, 1)`;
    dial.style.transform = `rotate(${overshoot}deg)`;

    setTimeout(() => {
      dial.style.transition =
        `transform ${SNAP_TIME}ms cubic-bezier(0.34, 1.56, 0.64, 1)`;
      dial.style.transform = `rotate(${nextRotation}deg)`;

      setNextTheme();
      locked.current = false;
    }, BASE_TIME);
  };

  return (
    <DialWrapper
      onClick={handleNextTheme}
      aria-label={`Tema atual: ${activeTheme.label}`}
    >
      <Tooltip aria-live="polite">
        {activeTheme.label}
      </Tooltip>

      <Pointer />

      <Dial
        ref={dialRef}
        colors={themes.map(t => t.color)}
        style={{ transform: `rotate(${baseRotation}deg)` }}
      />
    </DialWrapper>
  );
}
