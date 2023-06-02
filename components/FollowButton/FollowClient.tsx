'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

interface Props {
  targetUserId: string;
  isFollowing: boolean;
}

const FollowClient = ({ targetUserId, isFollowing }: Props) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isPending || isFetching;

  const follow = async () => {
    setIsFetching(true);

    const res = await fetch('/api/follow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ targetUserId }),
    });

    setIsFetching(false);

    startTransition(() => {
      // - Refresh the current route:
      // - Makes a new request to the server for the route
      // - Re-fetches data requests and re-renders Server Components
      // - Sends the updated React Server Component payload to the client
      // - The client merges the payload without losing unaffected
      //   client-side React state or browser state
      router.refresh();
    });
  };

  const unfollow = async () => {
    setIsFetching(true);

    const res = await fetch(`/api/follow?targetUserId=${targetUserId}`, {
      method: 'DELETE',
    });

    setIsFetching(false);
    startTransition(() => router.refresh());
  };

  if (isFollowing) {
    return (
      <button className="text-white bg-gray-950 rounded p-4" onClick={unfollow}>
        {!isMutating ? 'Unfollow' : '...'}
      </button>
    );
  } else {
    return (
      <button className="text-white bg-gray-950 rounded p-4" onClick={follow}>
        {!isMutating ? 'Follow' : '...'}
      </button>
    );
  }
};

export default FollowClient;
