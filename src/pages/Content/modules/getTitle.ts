function getTitle() {
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    return ogTitle.getAttribute('content');
  }
  return '';
}

export default getTitle;
