export function formatTime(date) {
  const diff = Math.floor(
    (Date.now() - new Date(date).getTime()) / 60000
  );

  if (diff < 1) return 'just now';
  if (diff < 60) return `${diff} minutes ago`;

  const hours = Math.floor(diff / 60);
  return `${hours} hours ago`;
}
