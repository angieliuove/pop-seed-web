import Link from 'next/link';
export default function LoggedIn() {
  return (
    <div>
      <h1>You are successfully logged in. Start Exploring. </h1>
      <Link href="/">
        <a>Home Page</a>
      </Link>
      <style jsx>{`
        h1 {
          color: orange;
          font-family:"Cookie";
          margin:15px;
        }
        a {
          color: purple;
          font-size:20px;
          font-family:"Cookie";
          margin:15px;
        }
      `}</style>
    </div>
  );
}
