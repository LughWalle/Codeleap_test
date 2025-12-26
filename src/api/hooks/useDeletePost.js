import { useMutation } from '@tanstack/react-query';
import { postsAPI } from '../endpoints/posts';
import { queryClient } from '../../services/queryClient';

export const useDeletePost = () => {
  return useMutation({
    mutationFn: (id) => postsAPI.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
    onError: (error) => {
      console.error('Erro ao deletar post:', error);
    },
  });
};