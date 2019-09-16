import Stars from '../components/Stars';
const layoutStyle = {
  margin: 2,
  padding: 20,
  border: '1px solid #DDD'
};

export default function Review() {
  return (
    <div className="Review">
      <h1>Restaurant Reviews</h1>
      <div>
        <Stars/>
      </div>
      <div style={layoutStyle}>
        <p>The restaurant is very clean and well decorated. We rented the place for a month and got a lot of people to try out our menu.
        The communication with PopSeed is also very efficient. 
        </p>
      </div>
    </div>
  );
}
