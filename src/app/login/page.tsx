import { signIn } from "@devhub/auth";
import { Button } from "@devhub/ui";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-6">Welcome to DevHub</h1>
        <form
          action={async () => {
            "use server";
            await signIn("github", { redirectTo: "/dashboard" });
          }}
        >
          <Button type="submit" variant="primary" className="w-full">
            Sign in with GitHub
          </Button>
        </form>
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/dashboard" });
          }}
          className="mt-3"
        >
          <Button type="submit" variant="secondary" className="w-full">
            Sign in with Google
          </Button>
        </form>
      </div>
    </div>
  );
}
