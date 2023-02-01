import type { ReactNode } from "react";

interface AsyncViewProps {
  error?: string;
  isFetching: boolean;
  children: ReactNode;
}

export default function AsyncView({
  error,
  isFetching,
  children,
}: AsyncViewProps) {
  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <>{children}</>;
}
