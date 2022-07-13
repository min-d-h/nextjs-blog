import "../styles/global.css"

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// 모든 페이지에 공통적으로 적용되는 페이지
// 가장 root가 되는 페이지에 적용한다.