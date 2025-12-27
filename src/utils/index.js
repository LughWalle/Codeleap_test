export function formatTime(date) {
  const timestamp = new Date(date).getTime();

  if (Number.isNaN(timestamp)) return '';

  const diffInSeconds = Math.floor((Date.now() - timestamp) / 1000);

  if (diffInSeconds < 60) return 'just now';

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes === 1) return '1 minute ago';
  if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours === 1) return '1 hour ago';
  if (diffInHours < 24) return `${diffInHours} hours ago`;

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays === 1) return '1 day ago';
  if (diffInDays < 30) return `${diffInDays} days ago`;

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths === 1) return '1 month ago';
  if (diffInMonths < 12) return `${diffInMonths} months ago`;

  const diffInYears = Math.floor(diffInMonths / 12);
  return diffInYears === 1
    ? '1 year ago'
    : `${diffInYears} years ago`;
}

export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));