import Layout from '../components/MyLayout';
import Video from '../components/Video';
import DropDown from '../components/DropDown';
import Images from '../components/Images';

function getPosts() {
  return [
    { id: 'lokanta', title: 'lokanta', location: 'Walnut Creek' },
    { id: 'puerto', title: 'puerto1', location: 'San Francisco'},
    { id: 'fumi', title: 'Fumi2', location: 'Oakland'},
    { id: 'edge', title: 'edge2', location: 'Berkeley'},
    { id: 'cracked&battered', title: 'cracked&battered', location: 'San Francisco'},
    { id: 'gakara', title: 'gakara', location: 'San Francisco'}
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

export default function Blog() {
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
