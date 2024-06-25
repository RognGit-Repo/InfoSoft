import React, { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { useCreateUserAccount } from "../../lib/react-query/query";

const SigninForm = () => {
  const { toast } = useToast();
  const {
    data: posts,
    isLoading: isPostLoading,
    isError: isErrorPosts,
  } = useCreateUserAccount();
  useEffect(() => {
    setTimeout(() => {
      toast({ title: "I waited for 3 sec! " });
    }, 3000);
  }, []);

  const handleButton = () => {
    toast({ title: "I am Clicked! " });
    console.log(posts);
  };
  return (
    <h1 className="text-3xl font-bold underline">
      <Button
        type="submit"
        className="shad-button_primary"
        onClick={handleButton}
      >
        SigninForm
      </Button>
    </h1>
  );
};

export default SigninForm;
