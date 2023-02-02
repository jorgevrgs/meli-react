import type { ReactNode } from "react";

interface AsyncViewProps {
  error?: unknown;
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
    console.error(error);
    return (
      <div>
        Error: An error has occurred while trying to request data. Please try
        again or contact the administrator.
      </div>
    );
  }

  return <>{children}</>;
}
