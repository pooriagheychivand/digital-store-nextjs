import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="inner-wrapper">
          <div className="footer-menu">
            <span>درباره فروشگاه</span>
            <ul>
              <li>
                <a
                  href="https://pooria-geychivand@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ایمیل
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  همدان , خیابان میرزاده عشقی , جنب کتاب نارنجی
                </a>
              </li>
              <li>
                <a
                  href="https://www.digital populer.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  محصولات پر طرفدار
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <span>دسترسی سریع</span>
            <ul>
              <li>
                <a
                  href="https://www.digital Description"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  درباره ما
                </a>
              </li>
              <li>
                <a
                  href="989188076288"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  تماس با ما
                </a>
              </li>
              <li>
                <a
                  href="https://www.digital Shop.ir"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ورود و ثبت نام
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <span>راه‌های ارتباطی</span>
            <ul className="contact">
              <li>
                <a
                  href="https://github.com/pooria-geychivand"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  گیت هاب
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/pooria-geychivand"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  لینکدین
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/pooriaw_ghv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  تلگرام
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-box">
        <div className="container-footer">
          <p>© {new Date().getFullYear()} فروشگاه پوریا قیچی وند</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;