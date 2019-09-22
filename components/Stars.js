import Link from 'next/link';

const Stars = ({ post }) => {
  var star = <a></a>;
  if (post == "Lokanta") {
    star =
    <a>
      <span className="fa fa-star checked" style={{color: "orange"}}></span>
      <span className="fa fa-star checked" style={{color: "orange"}}></span>
      <span className="fa fa-star checked" style={{color: "orange"}}></span>
      <span className="fa fa-star checked" style={{color: "orange"}}></span>
      <span className="fa fa-star checked" style={{color: "orange"}}></span>
      <span className="rating"> 5.0</span>
    </a>
  } else if (post == "Fumi") {
    star =
    <a>
      <span className="fa fa-star checked" style={{color: "orange"}}></span>
      <span className="fa fa-star checked" style={{color: "orange"}}></span>
      <span className="fa fa-star checked" style={{color: "orange"}}></span>
      <span className="fa fa-star checked" style={{color: "orange"}}></span>
      <span className="fa fa-star"> 4.0</span>
    </a>
  }
  return (
  <div className="stars">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      {star}
    <style jsx>{`
      .checked {
        color: orange;
      }
    `}</style>
  </div>
)};

export default Stars;
