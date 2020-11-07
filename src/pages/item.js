import view from '../utils/view.js';
import getUrlParamValue from '../utils/getUrlParamValue.js';
import baseUrl from '../utils/baseUrl.js';
import Story from '../components/Story.js';
import Comment from '../components/Comment.js';

export default async function Item() {
  let story = null;
  let hasComments = false;
  let hasError = false;

  try {
    story = await getStory();
    hasComments = story.comments.length > 0;  
  } catch (error) {
    hasError = true;
    console.error(error);
  }
  
  view.innerHTML = !hasError 
  ? `<div>
    ${Story(story)}
  </div>
  <hr/>
  ${hasComments 
    ? story.comments.map(comment => Comment(comment)).join('') 
    : 'No comments'}
  `
  : `<div class="error">Error fetching story</div>`;
}

async function getStory() {
  // window.location.hash is gonna bring to #/item?id=123123
  const storyId = getUrlParamValue('id');
  const response = await fetch(`${baseUrl}/item/${storyId}`);
  const story = response && response.json();
  return story;  
}