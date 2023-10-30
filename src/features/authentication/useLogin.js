import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginAPi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginAPi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueriesData(["user", user]);
      navigate("/");
    },
    onError: (error) => {
      toast.error("Provided email or password are incorrect ");
      console.log("Error" + error);
    },
  });
  return { login, isLoading };
}
