import type { Poll } from './Poll';

export interface ApiResponseSuccessPoll {
  code: number;
  data: Poll;
}

export interface ApiResponseSuccessPolls {
  code: number;
  data: Poll[];
}

export interface ApiResponseError {
  code: number;
  message: string;
}
