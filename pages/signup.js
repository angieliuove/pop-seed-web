import Link from 'next/link';
export default function SignUp() {
  return (
    <div className="form-popup" id="myForm">
      <form action="/action_page.php" className="form-container">
        <h1>Enter your information</h1>
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required></input>
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required></input>
        <Link href="/registration">
          <a><button type="submit" className="btn">Sign up</button></a>
        </Link>
      </form>
    </div>
  );
}
