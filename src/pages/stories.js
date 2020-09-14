import view from '../utils/view.js';
import Story from '../components/Story.js';
import pathMap from '../routes/pathMap.js';

export default async function Stories(path) {
  const stories = await getStories(path);  
  const hasStories = stories.length > 0;
  view.innerHTML =
    `<div>
      ${hasStories ? stories.map((story, index) => Story({...story, index: index + 1})).join('') 
        : 'No stories found;'}      
    </div>`;
}

async function getStories(path) {
  const apiPath = pathMap.get(path);  
  
  const response = await fetch(`https://node-hnapi.herokuapp.com${apiPath}`);
  const stories = await response.json();

  return stories;
}