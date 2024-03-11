import {useQuery} from "@tanstack/react-query";
import {Comment} from "../types";

export const getComments = async () => {
  return fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
}

export const useComments = () => {
  return useQuery<Comment[]>({queryKey: ['comments'], queryFn: getComments})
}