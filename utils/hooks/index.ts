import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

// Redirect if unauthorized
export const useAuthOrRedirect = (url = "/login") => {
  const auth = getAuth();
  const router = useRouter();
  const [user, authLoading, error] = useAuthState(auth);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!authLoading) {
      if (!user) {
        router.push(url);
      } else {
        setReady(true);
      }
    }
    if (error) {
      console.error(error);
    }
  });

  return ready;
};

// Redirect if authorized already
export const useUnauthOrRedirect = (url = "/") => {
  const auth = getAuth();
  const router = useRouter();
  const [user, authLoading, error] = useAuthState(auth);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!authLoading) {
      if (user) {
        router.push(url);
      } else {
        setReady(true);
      }
    }
    if (error) {
      console.log(error);
    }
  });

  return ready;
};
