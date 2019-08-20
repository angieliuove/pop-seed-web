import Link from 'next/link';
export default ({ name }) => (
  <div className="column">

    <div className="Image">
      <Link href="/about">
        <a><img src={`/static/images/${name}.jpg`} alt={name} /></a>
      </Link>
    </div>
    <style jsx>{`
      img {
        margin: 0 0 1rem 0;
        width: 250px;
        height: 250px;
      }

      @media only screen and (max-width: 768px) {
        img {
          margin: 0 0 101px 0;
        }
      }
      .column {
        float: left;
        width: 33.33%;
        padding: 5px;
      }
    `}</style>
  </div>
);
