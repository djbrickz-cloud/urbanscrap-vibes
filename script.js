// Main script file
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.createElement('image-modal');
  document.body.appendChild(modal);

  document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
      modal.showImage(img.src);
    });
  });
// Initialize any global functionality here
    console.log('UrbanScrap Vibes loaded!');
    document.querySelector('.play-all-btn').addEventListener('click', () => {
      const dropsSection = document.querySelector('section:has(h2:contains("Latest Drops"))');
      dropsSection.scrollIntoView({ behavior: 'smooth' });
      
      // Highlight first track
      setTimeout(() => {
        const firstTrack = document.querySelector('.track-item');
        if (firstTrack) {
          firstTrack.classList.add('bg-primary-500', 'bg-opacity-20');
          setTimeout(() => firstTrack.click(), 500);
        }
      }, 1000);
    });

    // Make track rows clickable
document.querySelectorAll('table tbody tr').forEach(row => {
      row.style.cursor = 'pointer';
      row.addEventListener('click', () => {
        window.open('https://open.spotify.com/track/your-track-id', '_blank');
      });
    });
});