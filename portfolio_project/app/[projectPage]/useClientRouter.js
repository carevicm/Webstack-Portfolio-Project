import { useRouter } from "next/navigation";

function useClientRouter() {
  const router = useRouter();

  // Perform the check after calling `useRouter` to maintain the correct hooks order
  if (typeof window === "undefined") {
    // We're on the server, return null
    return null;
  }

  // We're on the client, return the router
  return router;
}

export default useClientRouter;
