/**
 * About component of the footer contains contact details and many more
 * @author:Shravya P
 */
import React from 'react';
import './footer.scss';

export default function About() {
  return (
    <div>
      <div className="about-container">
        <div className="about">
          <div style={{
            color: '#878787', fontSize: 12, fontWeight: 400, marginBottom: 9,
          }}
          >
            ABOUT
          </div>
          <a href="/" className="about-content" key="1" aria-label="Contact Us">Contact Us</a>
          <a href="/" className="about-content" key="2" aria-label="About Us">About Us</a>
          <a href="/" className="about-content" key="3" aria-label="Careers">Careers</a>
          <a href="/" className="about-content" key="4" aria-label="Flipkart Stories">Flipkart Stories</a>
          <a href="/" className="about-content" key="5" aria-label="Press">Press</a>
          <a href="/" className="about-content" key="6" aria-label="Flipkart Wholesale">Flipkart Wholesale</a>
          <a href="/" className="about-content" key="7" aria-label="Corporate Information">Corporate Information</a>
        </div>
        <div className="about">
          <div style={{
            color: '#878787', fontSize: 12, fontWeight: 400, marginBottom: 9,
          }}
          >
            HELP
          </div>
          <a href="/" className="about-content" key="1" aria-label="Payments">Payments</a>
          <a href="/" className="about-content" key="2" aria-label="Shipping">Shipping</a>
          <a href="/" className="about-content" key="3" aria-label="Cancellation & Returns">Cancellation & Returns</a>
          <a href="/" className="about-content" key="4" aria-label="FAQ">FAQ</a>
          <a href="/" className="about-content" key="5" aria-label="Report Infringement">Report Infringement</a>
        </div>
        <div className="about">
          <div style={{
            color: '#878787', fontSize: 12, fontWeight: 400, marginBottom: 9,
          }}
          >
            POLICY
          </div>
          <a href="/" className="about-content" key="1" aria-label="Return Policy">Return Policy</a>
          <a href="/" className="about-content" key="2" aria-label="Terms Of Use">Terms Of Use</a>
          <a href="/" className="about-content" key="3" aria-label="Security">Security</a>
          <a href="/" className="about-content" key="4" aria-label="Privacy">Privacy</a>
          <a href="/" className="about-content" key="5" aria-label="Sitemap">Sitemap</a>
          <a href="/" className="about-content" key="6" aria-label="EPR Compilance">EPR Compilance</a>
        </div>
        <div className="about">
          <div style={{
            color: '#878787', fontSize: 12, fontWeight: 400, marginBottom: 9,
          }}
          >
            SOCIAL
          </div>
          <a href="/" className="about-content" key="1" aria-label="Facebook">Facebook</a>
          <a href="/" className="about-content" key="2" aria-label="Twitter">Twitter</a>
          <a href="/" className="about-content" key="3" aria-label="YouTube">YouTube</a>
        </div>
        <div className="mail-us-container">
          <div style={{
            color: '#878787', fontSize: 12, fontWeight: 400, marginBottom: 9,
          }}
          >
            Mail Us:
          </div>
          <div className="mail-address">
            <p>Flipkart Internet Private Limited, </p>
            <p> Buildings Alyssa, Begonia &amp; </p>
            <p> Clove Embassy Tech Village, </p>
            <p> Outer Ring Road, Devarabeesanahalli Village, </p>
            <p> Bengaluru, 560103, </p>
            <p> Karnataka, India</p>
          </div>
        </div>
        <div className="mail-us-container">
          <div style={{
            color: '#878787', fontSize: 12, fontWeight: 400, marginBottom: 9,
          }}
          >
            Registered Office Address:
          </div>
          <div className="mail-address">
            <p>Flipkart Internet Private Limited, </p>
            <p> Buildings Alyssa, Begonia &amp; </p>
            <p> Clove Embassy Tech Village, </p>
            <p> Outer Ring Road, Devarabeesanahalli Village, </p>
            <p> Bengaluru, 560103, </p>
            <p> Karnataka, India </p>
            <p> CIN : U51109KA2012PTC066107 </p>
            <p>
              Telephone:
              <a href="tel:18002029898">1800 202 9898</a>
            </p>
          </div>
        </div>
      </div>
      <div className="miscellaneous">
        <div>
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0zLTNoMjB2MjBILTN6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTAuNDkyIDNDNi4zNTMgMyAzIDYuMzYgMyAxMC41YzAgNC4xNCAzLjM1MyA3LjUgNy40OTIgNy41QzE0LjY0IDE4IDE4IDE0LjY0IDE4IDEwLjUgMTggNi4zNiAxNC42NCAzIDEwLjQ5MiAzem0zLjE4IDEyTDEwLjUgMTMuMDg4IDcuMzI3IDE1bC44NC0zLjYwN0w1LjM3IDguOTdsMy42OS0uMzE1TDEwLjUgNS4yNWwxLjQ0IDMuMzk4IDMuNjkuMzE1LTIuNzk4IDIuNDIyLjg0IDMuNjE1eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMgLTMpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=" alt="advertise" />
          <a href="/">
            <span className="misc-data">Advertise</span>
          </a>
        </div>
        <div>
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0yLTJoMjB2MjBILTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTUuOTMgNS42MTRoLTIuOTQ4VjQuMTRjMC0uODE4LS42NTUtMS40NzMtMS40NzMtMS40NzNIOC41NmMtLjgxNyAwLTEuNDczLjY1NS0xLjQ3MyAxLjQ3M3YxLjQ3NEg0LjE0Yy0uODE4IDAtMS40NjYuNjU2LTEuNDY2IDEuNDc0bC0uMDA3IDguMTA1YzAgLjgxOC42NTUgMS40NzQgMS40NzMgMS40NzRoMTEuNzljLjgxOCAwIDEuNDc0LS42NTYgMS40NzQtMS40NzRWNy4wODhjMC0uODE4LS42NTYtMS40NzQtMS40NzQtMS40NzR6bS00LjQyMSAwSDguNTZWNC4xNGgyLjk0OHYxLjQ3NHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yIC0yKSIvPgogICAgPC9nPgo8L3N2Zz4K" alt="Sell-on-Flipkart" />
          <a href="/">
            <span className="misc-data">Sell on Flipkart</span>
          </a>
        </div>
        <div>
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDE4IDE3Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0xLTFoMjB2MjBILTF6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTYuNjY3IDVIMTQuODVjLjA5Mi0uMjU4LjE1LS41NDIuMTUtLjgzM2EyLjQ5NyAyLjQ5NyAwIDAgMC00LjU4My0xLjM3NUwxMCAzLjM1bC0uNDE3LS41NjdBMi41MSAyLjUxIDAgMCAwIDcuNSAxLjY2N2EyLjQ5NyAyLjQ5NyAwIDAgMC0yLjUgMi41YzAgLjI5MS4wNTguNTc1LjE1LjgzM0gzLjMzM2MtLjkyNSAwLTEuNjU4Ljc0Mi0xLjY1OCAxLjY2N2wtLjAwOCA5LjE2NkExLjY2IDEuNjYgMCAwIDAgMy4zMzMgMTcuNWgxMy4zMzRhMS42NiAxLjY2IDAgMCAwIDEuNjY2LTEuNjY3VjYuNjY3QTEuNjYgMS42NiAwIDAgMCAxNi42NjcgNXptMCA2LjY2N0gzLjMzM3YtNWg0LjIzNEw1LjgzMyA5LjAyNWwxLjM1Ljk3NSAxLjk4NC0yLjdMMTAgNi4xNjdsLjgzMyAxLjEzMyAxLjk4NCAyLjcgMS4zNS0uOTc1LTEuNzM0LTIuMzU4aDQuMjM0djV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSAtMSkiLz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="Gift Cards" />
          <a href="/">
            <span className="misc-data">Gift Cards</span>
          </a>
        </div>
        <div>
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0yLTNoMjB2MjBILTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNOS41IDNDNS4zNiAzIDIgNi4zNiAyIDEwLjUgMiAxNC42NCA1LjM2IDE4IDkuNSAxOGM0LjE0IDAgNy41LTMuMzYgNy41LTcuNUMxNyA2LjM2IDEzLjY0IDMgOS41IDN6bS43NSAxMi43NWgtMS41di0xLjVoMS41djEuNXptMS41NTMtNS44MTNsLS42NzYuNjljLS41NC41NDgtLjg3Ny45OTgtLjg3NyAyLjEyM2gtMS41di0uMzc1YzAtLjgyNS4zMzgtMS41NzUuODc3LTIuMTIzbC45My0uOTQ1Yy4yNzgtLjI3LjQ0My0uNjQ1LjQ0My0xLjA1NyAwLS44MjUtLjY3NS0xLjUtMS41LTEuNVM4IDcuNDI1IDggOC4yNUg2LjVhMyAzIDAgMSAxIDYgMGMwIC42Ni0uMjcgMS4yNi0uNjk3IDEuNjg4eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTMpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=" alt="Help-center" />
          <a href="/">
            <span className="misc-data">Help Center</span>
          </a>
        </div>
        <span className="copy-right">
          ?? 2007-2022
          <span>Flipkart.com</span>
        </span>
        <img className="pay-image" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_69e7ec.svg" alt="payment-options" />
      </div>
    </div>
  );
}
