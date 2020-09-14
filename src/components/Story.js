export default function Story(story) {
  return `
  <div class="story">
    <div>
      <span class="gray">${story.index}</span>
      <span class="upvote">▲</span>
      <a href="${story.url}">${story.title}</a>
      <a href="${story.domain}">(${story.domain})</a>      
    </div>
    <div>
      <div class="gray">
        ${story.points} points by ${story.user} ${story.time_ago}
        |
        <a href="#/item?id=${story.id}">
          ${story.comments_count}
        </a>
        <span class="favorite">
          <img class="heart" src="../../assets/favorite-icon.png">
          Add To Favorites
        </span>
      </div>
    </div>
  </div>
  `;
}