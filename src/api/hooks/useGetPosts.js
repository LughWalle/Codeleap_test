import { useQuery } from '@tanstack/react-query';
import { postsAPI } from '../endpoints/posts';

export const useGetPosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data } = await postsAPI.getAll();
      return data.results || data;
    },
  });
};