
export default function ProfileId({ params }) {
  const { profileId } = params;

  return (
    <div>
      <h1>User: {profileId}</h1>
    </div>
  );
}
