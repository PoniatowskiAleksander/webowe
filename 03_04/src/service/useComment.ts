import {useQuery} from "@tanstack/react-query";
import {Comment} from "../types";

export const getComment = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comment/${id}`);
  return await response.json();
}

export const usePost = (id: string) => {
  return useQuery<Comment>({queryKey: ['comment', id], queryFn: () => getComment(id)});
}