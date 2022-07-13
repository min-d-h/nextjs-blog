import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
// Users/mdh/Dev/nextjs-blog/lib/posts.js 안의 지정된 객체 형태만 뽑아올 수 있다.
// Returns an array that looks like this:
// [
//   {
//     params: {
//       id: 'ssg-ssr'
//     }
//   },
//   {
//     params: {
//       id: 'pre-rendering'
//     }
//   }
// ]
// 그 형태는 위 내용과 같고, 그것을 뽑아오기 위해서 getStaticPaths를 사용한다.
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    // paths: [(params: {id: 'ssh-ssr'})],  <-와 같은 형태 일 것이다.
    paths,
    fallback: false,
  };
}

export default function Post({postData}) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}
