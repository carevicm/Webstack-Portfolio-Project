import { useRouter } from "next/navigation";

function useClientRouter() {
  if (typeof window === "undefined") {
    return null;
  }
  return useRouter();
}

export default useClientRouter;
