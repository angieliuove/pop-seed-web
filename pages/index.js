import Layout from '../components/MyLayout';
import Video from '../components/Video';
import DropDown from '../components/DropDown';
import Images from '../components/Images';

function getPosts() {
  return [
    { id: 'Lokanta', price: '$500/day', location: 'Walnut Creek' },
    { id: 'Puerto', price: '$899/day', location: 'San Francisco'},
    { id: 'Fumi', price: '$695/day', location: 'Oakland'},
    { id: 'Edge', price: '$429/day', location: 'Berkeley'},
    { id: 'Cracked&battered', price: '$1200/day', location: 'San Francisco'},
    { id: 'Gakara', price: '$989/day', location: 'San Francisco'}
  ];
}

// const PostLink = ({ post }) => (
//   <li>
//     <Link href="/p/[id]" as={`/p/${post.id}`}>
//       <a><img src={`/static/images/${post.title}.jpg`} alt={post.title} /></a>
//     </Link>
//     <style jsx>{`
//       li {
//         list-style: none;
//         margin: 5px 0;
//       }
//
//       a {
//         text-decoration: none;
//         color: blue;
//         font-family: 'Arial';
//       }
//
//       a:hover {
//         opacity: 0.6;
//       }
//     `}</style>
//   </li>
// );

const Blog = () => {
  return (
    <Layout>
      <DropDown />
      <Video />
      <h1>
        <span className='text'>
          Popular Spaces for your pop up restaurants
        </span>
      </h1>
      <style jsx>{`
        .text {
          height: 90%;
          margin-top:0;
          margin-bottom: 5rem;
          display: block;
          text-align:center;
          display:table;
          width:100%;
        }
        .text h1 {
          display:table-cell;
          vertical-align:center;
        }
      `}</style>
      <Images images={getPosts()}/>
    </Layout>
  );
}
export {Blog as default, getPosts};
