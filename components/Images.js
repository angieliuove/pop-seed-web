import Image from './Image';

export default ({ images }) => {
  return (
    <div>
      {images.map(image => <Image name={image.name} key={image.name} />)}
    </div>
  );
}
