// Shared interfaces between frontend and backend
export interface ApiResponse<T> {
  data: T;
  message?: string;
}
