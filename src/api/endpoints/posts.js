import { apiClient } from '../client';

export const postsAPI = {
  getAll: () => apiClient.get(''),

  create: (data) => apiClient.post('', data),

  update: (id, data) => apiClient.patch(`${id}/`, data),

  delete: (id) => apiClient.delete(`${id}/`),
};