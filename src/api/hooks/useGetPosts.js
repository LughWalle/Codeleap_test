import { useQuery } from '@tanstack/react-query';
import { postsAPI } from '../endpoints/posts';
import { sleep } from '../../utils';

export const useGetPosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      await sleep(1500); // Simulate network dalay for viewing skeleton loading
      const { data } = await postsAPI.getAll();
      return data.results || data;
    },
  });
};