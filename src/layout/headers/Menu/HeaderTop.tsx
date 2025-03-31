import Link from 'next/link';

const HeaderTop = ({ style }: any) => {
  // Calculate greeting based on current hour
  const currentHour = new Date().getHours();
  let greetingText = '';
  if (currentHour < 12) {
    greetingText = 'Good Morning :) !';
  } else if (currentHour < 18) {
    greetingText = 'Good Afternoon :) !';
  } else {
    greetingText = 'Good Evening :) !';
  }

  return (
    <div
      className={`navbar-top ${
        style ? 'pt-30 rpt-10 navtop--two' : 'pt-15 pb-10 bgc-black navtop--one'
      }`}
    >
      <div className="container">
        <div className={`navtop-inner ${style ? 'bgc-gray' : ''}`}>
          <ul className="topbar-left">
            {style ? (
              <>
                <li>
                  <b>
                    Call now - <Link href="callto:333-444555">767 - 444 555</Link>
                  </b>
                </li>
                <li>Mahaut, Dominica</li>
              </>
            ) : (
              <>
                <li>
                  <span>HI</span>, {greetingText}
                </li>
                <li>
                  <i className="flaticon-pin"></i> Mahaut, Dominica
                </li>
              </>
            )}
          </ul>
          <ul className="topbar-right">
            <li className="social-area">
              <span>Follow Us - </span>
              <Link href="#">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-pinterest-p"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
