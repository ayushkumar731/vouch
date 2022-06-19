import React from 'react';
import axios from 'axios';


class AxiosAPI extends React.Component {
  constructor() {
    super();

    const API_HOSTNAME = `${process.env.API_URL}:${process.env.API_PORT}`;

    const service = axios.create({
      baseURL: API_HOSTNAME,
      crossDomain: true,
    });
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
  }

  handleSuccess = (res) => res;

  handleError = async (error) => {
    switch (error.response.status) {
      case 401:
        this.redirectTo(document, '/');
        break;

      case 404:
        break;
      default:
        break;
    }
    return Promise.reject(error);
  };

  redirectTo = (document, path) => {
    document.location = path;
  };

  post(path, payload, thunkAPI) {
    return this.service
      .request({
        method: 'POST',
        url: path,
        responseType: 'json',
        data: payload,
        headers: {
          accept: 'application/json',
        },
      })
      .then((response) => response)
      .catch((error) => {
        throw thunkAPI.rejectWithValue(error.response.data);
      });
  }
}

export default new AxiosAPI();
