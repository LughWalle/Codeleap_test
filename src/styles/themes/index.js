// export { lightTheme } from './lightTheme';
// export { darkTheme } from './darkTheme';
// export { forestTheme } from './forestTheme';

import { createAppTheme } from './createAppTheme';

export const lightTheme  = createAppTheme({ id: 'light', mode: 'light' });
export const forestTheme = createAppTheme({ id: 'forest', mode: 'dark' });
// export const nightTheme = createAppTheme({ id: 'night', mode: 'dark' });
export const darkTheme   = createAppTheme({ id: 'dark', mode: 'dark' });