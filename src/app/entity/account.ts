export interface Account {
  id: number;
  username: string;
  role: 'ADMIN' | 'TEACHER' | 'STUDENT';
  createdAt: string;
}
