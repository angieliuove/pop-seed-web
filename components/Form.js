import Link from 'next/link';
function myFunction() {
  if (process.browser) {
    return document.getElementById("search").value;
  } else {
    return ""
  }
}
const SearchForm = () => {
  return(
    <div className="container-1">
      <input type="search" id="search" placeholder="City..." />
      <Link href="/searchPage">
        <a><button type="submit"><i className="fa fa-search"></i></button></a>
      </Link>
      <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
      <style jsx>{`

        .container-1{
          width: 300px;
          vertical-align: middle;
          white-space: nowrap;
          position: relative;
          opacity: 0.8;
        }
        .container-1 button {
          width: 20%;
          padding: 14px;
          background: white;
          color: red;
          font-size: 17px;
          border: 1px solid grey;
          border-left: none; /* Prevent double borders */
          cursor: pointer;
        }
        .container-1 button:hover {
          background: #FF6347;
        }


        .container-1 input#search{
          width: 300px;
          height: 50px;
          background: #FF0000;
          border: none;
          font-size: 10pt;
          float: left;
          color: #63717f;
          padding-left: 45px;
          -webkit-border-radius: 5px;
          -moz-border-radius: 5px;
          border-radius: 5px;

          -webkit-transition: background .55s ease;
          -moz-transition: background .55s ease;
          -ms-transition: background .55s ease;
          -o-transition: background .55s ease;
          transition: background .55s ease;
        }
        .container-1 input#search::-webkit-input-placeholder {
            color: white;
        }

        .container-1 .icon{
          position: absolute;
          top: 50%;
          margin-left: 17px;
          margin-top: 17px;
          z-index: 1;
          color: #4f5b66;
        }

        .container-1 input#search:hover, .container-1 input#search:focus, .container-1 input#search:active{
          outline:none;
          background: #ffffff;
        }
      `}</style>
    </div>
  );
}
function searchFunc() {
  document.getElementsByName("button").innerHTML = "you cliked me";
}
export default SearchForm;
