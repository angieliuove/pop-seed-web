import Link from 'next/link';
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};
export default function Search() {
  return (
    <div style={layoutStyle}>
      <h1>Search Result...</h1>
      <Link href="/p/lokanta/Walnut Creek">
        <a >Walnut Creek Lokanta Restaurant</a>
      </Link>
      <p>Located in Walnut Creek, CA, Lokanta has 4,140-square-foot space, with kitchen, dining spaces availale to rent.</p>
      <Link href="/p/Puerto/San Francisco">
        <a >San Francisco Puerto Restaurant</a>
      </Link>
      <p>Located in San Francisco, CA, Puerto restaurant has 2,130-square-foot space, with kitchen, dining spaces availale to rent. There are also plenty utensils and cooking tools available.</p>
      <Link href="/p/Fumi/Oakland">
        <a >Oakland Fumi Restaurant</a>
      </Link>
      <p>Located in Oakland, CA, Fumi restaurant has 3,220-square-foot space, with kitchen, dining spaces availale to rent.</p>
      <Link href="/p/Edge/Berkeley">
        <a >Berkeley Edge Restaurant</a>
      </Link>
      <p>Located in Berkeley, CA, Edge restaurant has 2,220-square-foot space, with kitchen, dining spaces availale to rent. There is also one restroom avaible for customer.</p>
      <Link href="/p/Cracked&battered/San Francisco">
        <a >San Francisco Cracked&battered Restaurant</a>
      </Link>
      <p>Located in San Francisco, CA, Cracked&battered restaurant has 2,420-square-foot space, with kitchen, dining spaces availale to rent.</p>
      <Link href="/p/Gakara/San Francisco">
        <a >San Francisco Gakara Restaurant</a>
      </Link>
      <p>Located in San Francisco, CA, Gakara restaurant has 3,410-square-foot space, with kitchen, dining spaces availale to rent.</p>
    </div>
  );
}
