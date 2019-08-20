import SearchForm from './Form.js';
const Video = () => (
  <div className="section">
    <h1>Rent space for your idea. Host a pop up.</h1>
    <div className="form-input">
      <SearchForm/>
    </div>
    <div className="video-container">
      <video muted="muted" loop="loop" autoPlay="autoplay" playsInline="true" poster="https://d253b1eioa5z7b.cloudfront.net/homepage/homepage-poster-2.png" src="https://d253b1eioa5z7b.cloudfront.net/homepage/homepage-video-2.mp4"></video>
    </div>
    <style jsx>{`
      * {
        box-sizing: border-box;
      }
      .section {
        position: relative;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      @media (max-width: 600px) {
        h1, form-input {
          width: 100%;
          height: auto;
        }
      }

      .section h1 {
        text-align: center;
        font-size:3rem;
        font-family:"Cookie";
        padding:20px;
        margin:15px;
        z-index:1;
      }

      .form-input {
        margin: 100px auto;
        position: absolute;
        padding: 20px;
        z-index: 1;
      }

      .video-container {
        position:absolute;
        top:0;
        left:0;
        width:100%;
      }

    `}</style>
  </div>
);

export default Video;
