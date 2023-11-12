import { login as loginApi } from "../services/apiAuth";
import { useRouter } from "next/router";

export async function login(email, password) {
  try {
    const user = await loginApi({ email, password });
    // Handle successful login, e.g., store user data in state or context
    // queryClient.setQueryData(["user"], user.user);
    const router = useRouter();
    router.push("/", { replace: true });
  } catch (err) {
    console.error("ERROR", err);
    // Handle login error, e.g., show an error message
    // toast.error("Provided email or password are incorrect");
  }
}