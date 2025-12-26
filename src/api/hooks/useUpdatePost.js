import { useMutation } from '@tanstack/react-query';
import { postsAPI } from '../endpoints/posts';
import { queryClient } from '../../services/queryClient';

export const useUpdatePost = () => {
  return useMutation({
    mutationFn: ({ id, data }) => postsAPI.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
    onError: (error) => {
      console.error('Erro ao editar post:', error);
    },
  });
};