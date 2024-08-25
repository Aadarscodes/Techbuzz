import React, { useEffect, useState } from 'react';
import { RiMenuFill as Menu, RiMenuFoldFill as Close } from 'react-icons/ri';

export default function Header() {
  const [toggle, setToggle] = useState(true);
  const [stick, setStick] = useState({
    padding: '8px 0',
  });

  const menuClick = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 10) {
        setStick({
          padding: '12px 0',
          top: 0,
          position: 'fixed',
          transition: 'padding 0.2s ease',
        });
      } else {
        setStick({
          padding: '8px 0',
          transition: 'padding 0.2s ease',
        });
      }
      setToggle(true);
    };
  }, []);

  return (
    <header style={{ backgroundColor: 'black', width: '100%', position: 'fixed', ...stick }}>
      <div className="wrap">
        {/* <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#" style={{ color: 'white', fontSize: '2em', fontFamily: 'Bebas Neue' }}>TechBuzz</a>

          <div style={{ display: toggle ? 'none' : 'flex', gap: '20px' }}>
            <a style={{ fontWeight: 'bold', color: 'white' }} href="#">HOME</a>
            <a style={{ fontWeight: 'bold', color: 'white' }} href="#">SERVICE</a>
            <a style={{ fontWeight: 'bold', color: 'white' }} href="#">SOLUTION</a>
            <a style={{ fontWeight: 'bold', color: 'white' }} href="#">CONTACT</a>
            <a style={{ fontWeight: 'bold', color: 'white' }} href="#">Login/Register</a>
          </div>

          <button style={{ display: 'block', width: '32px', height: '32px' }} onClick={menuClick}>
            {toggle ? <Menu style={{ color: 'white', width: '100%', fontSize: '2em' }} /> : <Close style={{ color: 'white', width: '100%', fontSize: '2em' }} />}
          </button>

          {/* Mobile Menu */}
        {/* <div style={{
            display: toggle ? !'none' : 'flex',
            flexDirection: 'column',
            position: 'fixed',
            width: '100%',
            top: '60px',
            left: 0,
            backgroundColor: 'black',
            transition: 'max-height 0.3s ease',
          }}>
            <a onClick={menuClick} style={{ margin: '5px 20px', fontWeight: 'bold', color: 'white' }} href="#">HOME</a>
            <a onClick={menuClick} style={{ margin: '5px 20px', fontWeight: 'bold', color: 'white' }} href="#">SERVICE</a>
            <a onClick={menuClick} style={{ margin: '5px 20px', fontWeight: 'bold', color: 'white' }} href="#">SOLUTION</a>
            <a onClick={menuClick} style={{ margin: '5px 20px', fontWeight: 'bold', color: 'white' }} href="#">CONTACT</a>
            <a onClick={menuClick} style={{ margin: '5px 20px', marginBottom: '20px', fontWeight: 'bold', color: 'white' }} href="#">Login/Register</a>
          </div>
        </nav> */}
        <nav class="navbar navbar-expand-lg navbar-dark bg-slate-900">
          <a class="navbar-brand" href="home">Home</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="Login">Login/Register <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  About 
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
