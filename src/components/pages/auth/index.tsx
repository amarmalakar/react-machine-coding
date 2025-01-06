import { useState } from "react";
import AuthForm from "./auth-form";

export default function AuthPage() {
  const [signIn, setSignIn] = useState(true);

  return (
    <div>
      <AuthForm signIn={signIn} setSignIn={setSignIn} />
    </div>
  );
}
