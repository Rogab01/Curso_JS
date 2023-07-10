export function Post(props) {
  let { content, date, title } = props,
    fechaformat = new Date(date).toLocaleString();
  return `
  <section class ="post-page">
    <aside>
      <h2>${title.rendered}</h2>
      <time datetime="${date}"> ${fechaformat}</time>
    </aside>
    <hr>
    <article>${content.rendered}</article>

  </section> 
  `;
}
