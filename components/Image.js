import Link from 'next/link';
export default ({ post }) => (
  <div className="column">
    <div className="Image">
      <Link href="/p/[id]" as={`/p/${post.id}`}>
        <a><img src={`/static/images/${post.id}.jpg`} alt={post.title} align="middle"/></a>
      </Link>
    </div>
    <style jsx>{`
      img {
        width: 250px;
        height: 200px;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }

      @media only screen and (max-width: 768px) {
        img {
          margin: 0 0 101px 0;
        }
      }

      .column {
        float: left;
        width: 32%;
        padding: 5px;
      }
    `}</style>
  </div>
);
