/**
 * D (Dependency Inversion Principle)
 * One entity must depend on abstractions not on concretions.
 */

import { wierdLibrary } from "./wierdLibrary";

import { useRef } from "react";

export function ConnectedForm() {
  const handleSubmit = async (name: string, email: string) => {
    await wierdLibrary.login(name, email);
  };

  return <GoodForm onSubmit={handleSubmit} />;
}

export function GoodForm({
  onSubmit,
}: {
  onSubmit: (name: string, email: string) => void;
}) {
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    const nameValue = name.current?.value;
    const emailValue = email.current?.value;

    if (!nameValue || !emailValue) return;

    onSubmit(nameValue, emailValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={name} type="text" />
      <input ref={email} type="email" />
      <button type="submit">Submit</button>
    </form>
  );
}
