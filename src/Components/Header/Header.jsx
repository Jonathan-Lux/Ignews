import SingInButton from"../SingInButton/SingInButton"

export function Header() {
  return (
    <header className="header-container">
      <div className="header-context">
        <nav>
        <img src="../../../assets/logo.svg" alt="logo" />
          <a className="active">Home</a>
          <a>Post</a>
        </nav>
       <SingInButton/>
      </div>
      
    </header>
  );
}
