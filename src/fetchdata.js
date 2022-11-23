export const getYoutubeVideo = async (search) => {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=AIzaSyBHmpuP3qVupg3qO4v_py8tUgHTtwMiF5E&q=${search}`;
  //   const response = await fetch(url);
  return await (await fetch(url)).json();
};

// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=AIzaSyBHmpuP3qVupg3qO4v_py8tUgHTtwMiF5E&q=$%7Bsearch%7D
