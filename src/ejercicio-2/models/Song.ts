/**
 * Represents a song.
 */
export interface Song {
  /** The name of the song. */
  name: string;

  /** The duration of the song in seconds. */
  duration: number;

  /** The genres associated with the song. */
  genres: string[];

  /** Whether the song is a single or part of an album. */
  single: boolean;

  /** The number of times the song has been played. */
  plays: number;
}
