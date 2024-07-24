import type { MusicGenre } from './MusicGenre.enum';

export interface Poll {
  id: PollId;
  musicGenre: MusicGenre;
  email: string;
}

export type PollId = number | null;
