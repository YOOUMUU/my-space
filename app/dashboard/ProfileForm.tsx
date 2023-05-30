'use client';

const ProfileForm = ({ user }: any) => {
  const updateUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const body = {
      name: formData.get('name'),
      email: formData.get('email'),
      image: formData.get('image'),
    };

    const res = await fetch(`/api/user`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <div className="container">
      <h2 className="text-2xl font-bold mb-4">Edit Your Profile</h2>
      <form className="flex flex-col justify-start " onSubmit={updateUser}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            defaultValue={user?.name ?? ''}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded sm:text-md focus:ring-1"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email ?? ''}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded sm:text-md focus:ring-1"
          />
        </div>
        <div className="mb-10">
          <label
            htmlFor="image"
            className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md font-medium text-gray-700 mb-1"
          >
            Profile Image URL
          </label>
          <input
            type="text"
            name="image"
            id="image"
            defaultValue={user?.image ?? ''}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded sm:text-md focus:ring-1"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-gray-950 rounded px-4, py-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
