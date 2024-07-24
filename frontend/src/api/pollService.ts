import { AxiosError } from 'axios';
import type { ApiResponseError, ApiResponseSuccessPoll, ApiResponseSuccessPolls } from '../@types/api';
import type { Poll } from '../@types/Poll';
import { axiosClient } from './api-client';

export const getAllPolls = async (): Promise<Poll[]> => {
  try {
    const axiosResponse = await axiosClient.get('/polls');
    const { data } = axiosResponse.data as ApiResponseSuccessPolls;
    return data;
  } catch (e) {
    const error = e as AxiosError;
    const { message } = error.response?.data as ApiResponseError;
    //console.error(message);
    throw new Error(message);
  }
};

export const createPoll = async (newPoll: Poll): Promise<ApiResponseSuccessPoll> => {
  try {
    const axiosResponse = await axiosClient.post('/poll', newPoll);
    console.log(axiosResponse.status);
    console.log('createPoll');
    const json = axiosResponse.data as ApiResponseSuccessPoll;
    return json;
  } catch (e) {
    const error = e as AxiosError;
    const { message } = error.response?.data as ApiResponseError;
    // console.error(message);
    throw new Error(message);
  }
};
