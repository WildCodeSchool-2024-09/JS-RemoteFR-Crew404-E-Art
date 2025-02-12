export interface Oeuvre {
  id: number;
  title: string;
  author: string;
  artist: string;
  image: string;
  year: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  isArtist: boolean;
  created_at: string;
  role_id: number;
}
