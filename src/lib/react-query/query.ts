import { useMutation, useQuery } from "@tanstack/react-query";
import { createUserAccount, signInAccount } from "../backend/api";

type INewUser = {
  username: String;
  password: String;
};

export const useCreateUserAccount = () => {
  return useQuery({
    queryKey: ["SampleQueryHash"],
    queryFn: () => signInAccount(),
  });
};

export const useSignInAccount = () => {
  return useMutation({});
};
