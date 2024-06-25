import React, { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

const SigninForm = () => {
  const { toast } = useToast();
  useEffect(() => {
    setTimeout(() => {
      toast({ title: "I waited for 3 sec! " });
    }, 3000);
  }, []);

  const handleButton = () => {
    toast({ title: "I am Clicked! " });
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
