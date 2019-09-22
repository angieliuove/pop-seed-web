import Link from 'next/link';
export default ({ post }) => {
  var star = <a></a>;
  if (post.id == "Lokanta") {
    star =
    <a>
      <span className="fa fa-star checked" style={{color: "orange"}}></span>
      <span className="fa fa-star checked" style={{color: "orange"}}></span>
      <span className="fa fa-star checked" style={{color: "orange"}}></span>
      <span className="fa fa-star checked" style={{color: "orange"}}></span>
      <span className="fa fa-star checked" style={{color: "orange"}}> 5.0</span>
    </a>

  } else if (post.id === "Fumi") {
    star =
    <a>
      <span className="fa fa-star checked" style={{color: "orange"}}></span>
      <span className="fa fa-star checked" style={{color: "orange"}}></span>
      <span className="fa fa-star checked" style={{color: "orange"}}></span>
      <span className="fa fa-star checked" style={{color: "orange"}}></span>
      <span className="fa fa-star"> 4.0 </span>
    </a>
  }
  return (
  <div className="column">
    <div className="Image">
      <Link href="/p/[id]/[location]" as={`/p/${post.id}/${post.location}`}>
        <a><img src={`/static/images/${post.id}.jpg`} alt={post.title} align="middle"/></a>
      </Link>
      <p>{post.id} Restaurant - {post.location}</p>
      <p>{post.price}</p>
      <Link href="/review/[id]" as={`/review/${post.id}`}>
      {star}
      </Link>

    </div>
    <style jsx>{`
      .checked {
        color: orange;
      }
      .Image {
        text-align: justify;
        margin-left: auto;
        margin-right: auto;
        display: block;
        width:250px;
      }
      img {
        width: 250px;
        height: 200px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        text-align: justify;
      }


      .column {
        float: left;
        width: 32%;
        padding: 5px;
      }
    `}</style>
  </div>
)};
