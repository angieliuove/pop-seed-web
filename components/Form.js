const SearchForm = () => (
    <div className="container-1">
      <span className="icon"><i className="fa fa-search"></i></span>
      <input type="search" id="search" placeholder="City" />
      <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
      <style jsx>{`

        .container-1{
          width: 300px;
          vertical-align: middle;
          white-space: nowrap;
          position: relative;
          opacity: 0.8;
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
            color: #65737e;
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
)

export default SearchForm;
