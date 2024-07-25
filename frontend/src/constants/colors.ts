import { MusicGenre } from '../@types/MusicGenre.enum';

export const Colors = {
  white: '#FFFFFF',
  lightGray: '#E5E5E5',
  gray: '#D1D1D1',
  black: '#000000',
  yellow: '#FCA311',
  blue: '#14213D',
  red: '#CE0000',
  green: '#00FF00',
  purple: '#800080',
  orange: '#FFA500',
  pink: '#FFC0CB',
  brown: '#8B4513',
};

export const PieColors: Record<MusicGenre, string> = {
  [MusicGenre.ROCK]: Colors.red,
  [MusicGenre.POP]: Colors.pink,
  [MusicGenre.JAZZ]: Colors.blue,
  [MusicGenre.CLASSICAL]: Colors.lightGray,
  [MusicGenre.HIP_HOP]: Colors.purple,
  [MusicGenre.REGGAE]: Colors.green,
  [MusicGenre.BLUES]: Colors.blue,
  [MusicGenre.ELECTRONIC]: Colors.orange,
  [MusicGenre.COUNTRY]: Colors.brown,
  [MusicGenre.FOLK]: Colors.green,
  [MusicGenre.METAL]: Colors.black,
  [MusicGenre.PUNK]: Colors.red,
};
