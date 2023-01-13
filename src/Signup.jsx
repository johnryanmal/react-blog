export function Signup() {
  return (
    <div>
      <p>Signup</p>
      <form>
        <p>Name: <input type="text" name="name" /></p>
        <p>Email: <input type="text" name="email" /></p>
        <p>Password: <input type="password" name="password" /></p>
        <p>Password Confirmation:<input type="password" name="password_confirmation" /></p>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
