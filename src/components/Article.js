function Article({ title, date = "January 1, 1970", preview, minutes }) {
    const emoji = minutes < 30 ? "☕️" : "🍱";
    const emojiCount = minutes < 30 ? Math.ceil(minutes / 5) : Math.ceil(minutes / 10);
    
    return (
      <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
        <p>{emoji.repeat(emojiCount)} {minutes} min read</p>
      </article>
    );
  }

  export default Article;