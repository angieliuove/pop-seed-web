import Link from 'next/link';
export default function LogIn() {
  return (
    <div className="form-popup" id="myForm">
      <form action="/action_page.php" className="form-container">
        <h1>Enter your information and message</h1>
        <label for="email"><b>Email</b></label>
        <input type="text" style={{padding:10}} placeholder="Enter Email" name="email" required></input>

        <label for="psw"><b>Message</b></label>
        <input type="text" style={{padding:100}} placeholder="Enter Message" name="meg" required></input>
        <Link href="/request">
          <a><button type="submit" className="btn">Submit</button></a>
        </Link>
        <style jsx>{`
          input {
            width:100%;
          }
          .form-container {
            padding: 16px;
            margin: 24px 0 12px 0;
            position: relative;
          }

        `}</style>
      </form>
    </div>
  );
}
