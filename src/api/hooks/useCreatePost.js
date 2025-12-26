import { useMutation } from '@tanstack/react-query';
import { postsAPI } from '../endpoints/posts';
import { queryClient } from '../../services/queryClient';

export const useCreatePost = () => {
  return useMutation({
    mutationFn: (data) => postsAPI.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
    onError: (error) => {
      console.error('Erro ao criar post:', error);
    },
  });
};