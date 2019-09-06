import Image from './Image';

export default ({ images }) => {
  return (
    <div>
      {images.map(image => <Image key={image.id} post={image} />)}
    </div>
  );
}
