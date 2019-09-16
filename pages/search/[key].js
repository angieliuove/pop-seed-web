import { useRouter } from 'next/router';
export default () => {
  const router = useRouter();
  return (
    <div>
      <h1>{router.query.key}</h1>
    </div>
  );
}
