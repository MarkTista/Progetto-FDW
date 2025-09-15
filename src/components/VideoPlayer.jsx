import React from "react";
import "../pages/StudentLesson.css"
function getEmbedUrl(url) {
  if (!url) return "";
  if (url.includes("watch?v=")) {
    const videoId = url.split("watch?v=")[1];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return url;
}

function VideoPlayer({ videoUrl, titolo }) {
  return (
    <div className="video-container">
      <iframe
        src={getEmbedUrl(videoUrl)}
        title={titolo}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
export default VideoPlayer
