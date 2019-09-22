import Stars from '../../components/Stars';
import { useRouter } from 'next/router';
const layoutStyle = {
  margin: 2,
  padding: 20,
  border: '1px solid #DDD'
};

export default function Review() {
  const router = useRouter();
  var review = "";
  if (router.query.id == 'Lokanta') {
    review = "We had a great experience hosting pop up at Lokanta. The restaurant is very clean and modern. The kitchen serves our needs.";

  } else if (router.query.id == 'Fumi') {
    review = "The restaurant is very clean and well decorated. We rented the place for a month and got a lot of people to try out our menu. The communication with PopSeed is also very efficient.";
  }
  return (
    <div className="Review">
      <h1>Restaurant Reviews</h1>
      <div>
        <Stars post={router.query.id}/>
      </div>
      <div style={layoutStyle}>
        <p>{review}
        </p>
      </div>
    </div>
  );
}
