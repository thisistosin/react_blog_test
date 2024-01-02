export default async function index({params}) {

return (
<div className="blog-details">
  {/* { isPending && <div>Loading...</div> } */}
  {/* { error && <div>{ error }</div> } */}
    <article>
      <h2>{ blog.title }</h2>
      <p>Written by { blog.author }</p>
      <div>{ blog.body }</div>
    </article>
  
</div>
);

}
