import Link from 'next/link';
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};
export default function About() {
  return (
    <div style={layoutStyle}>
      <p>PopSeed is a platform that connects pop up restaurants with existing restaurants with open space and hours. The platform helps pop up restaurants to find space to try out their menus. It also allows exisitng restaurants to earn income by renting their space during their downtimes.</p>
      <p>The pop up can find space and finish their payment process on our website. We also help pop up restaurants to advertise to attract more customers. We will provide staffs for restaurant owners to monitor the renting period to make sure everything is in order.</p>
      <p>Feel free to contact us if you have any questions.</p>
      <Link href="/contact">
        <a>Contact Us</a>
      </Link>
    </div>
  );
}
