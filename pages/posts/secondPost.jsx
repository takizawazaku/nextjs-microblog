/**
 * これだと
 * http://localhost:3000/posts/secondPost
 * にはアクセスできない模様
 * @returns 
 */
// export const secondPost = () => {
//   return (
//     <div>
//       <h1>次の投稿</h1>
//       <h2>ホームへ戻る</h2>
//     </div>
//   )
// }

/**
 * こっちならOK
 * export defaultしないといけないっぽい？
 */
const SecondPost = () => {
  return (
    <div>
      <h1>次の投稿</h1>
      <h2>ホームへ戻る
      </h2>
    </div>
  )
}
export default SecondPost