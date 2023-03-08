import axios from 'axios';

export async function fetchImages(inputData, page) {
  const searchParams = new URLSearchParams({
    key: '32191357-e5eb44c7029df06b74c5fe549',
    q: inputData,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 12,
    page,
  });
  const images = await axios.get(`https://pixabay.com/api/?${searchParams}`);

  return images.data;
}
