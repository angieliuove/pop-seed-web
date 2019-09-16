import { useRouter } from 'next/router';
import Markdown from 'react-markdown';
import Layout from '../../../components/MyLayout';
import Popup from '../../../components/Popup';
export default () => {
  const router = useRouter();
  return (
    <Layout>
      <img src={`/static/images/${router.query.id}.jpg`} alt={router.query.id} width="750" height="550" align="middle"/>
      <h1>Locust St, {router.query.location} - {router.query.id}  {router.query.price}</h1>
      <div className="markdown">
        <Markdown
          source={`

### About this Place

Located in a row of restaurants on Locust St,\n
this restaurant space for rent is available for parties,\n
pop up eateries, or other events that would work\n
in this space that includes a liquor license.

### What is available here

Kitchen, Wifi, Counters, Shelves, Restroom, Dining Furniture


      `}
        />
      </div>
      <style jsx global>{`
        .markdown {
          font-family: 'Arial';
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin-right: auto;
          padding: 0;
          text-transform: uppercase;
        }
      `}</style>
      <Popup />
    </Layout>
  );
};
