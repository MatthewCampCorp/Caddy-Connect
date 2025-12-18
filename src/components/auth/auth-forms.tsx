"use client";

import * as React from "react";
import { SignUpForm } from "./sign-up-form";
import { SignInForm } from "./sign-in-form";
import { GolfIcon } from "@/components/icons";

export function AuthForms() {
  const [isSignUp, setIsSignUp] = React.useState(false);

  const toggleForm = () => setIsSignUp((prev) => !prev);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="mb-8 flex items-center gap-3">
        <GolfIcon className="h-10 w-10 text-primary" />
        <h1 className="text-3xl font-bold tracking-tight text-primary font-headline">
          Caddie Connect
        </h1>
      </div>
      {isSignUp ? (
        <SignUpForm onToggleForm={toggleForm} />
      ) : (
        <SignInForm onToggleForm={toggleForm} />
      )}
    </div>
  );
}
