import { User } from './user';

export interface RegisterResponse<T> {
  user: User,
  token: string,
}
