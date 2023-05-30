'use client';

import { useEffect } from 'react';

interface Props {
  error: Error;
  reset: () => void;
}

export default function UsersError({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container">
      <h2 className="text-2xl font-semibold mb-5 text-red-500">
        Something went wrong!
      </h2>
      <button
        className="text-md py-2 px-3 bg-gray-950 text-white rounded"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
