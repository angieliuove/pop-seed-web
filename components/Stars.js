import Link from 'next/link';

const Stars = () => (
  <div className="stars">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <a>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"> 4.0 average based on 15 reviews</span>
      </a>
    <style jsx>{`
      .checked {
        color: orange;
      }
    `}</style>
  </div>
);

export default Stars;
