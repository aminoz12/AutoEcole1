'use client';

import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Play, RotateCcw, X } from 'lucide-react';

export interface CustomYouTubePlayerRef {
  playVideo: () => void;
  exitFullscreen: () => void;
}

interface CustomYouTubePlayerProps {
  videoId: string;
  title: string;
  duration?: string;
  className?: string;
}

const CustomYouTubePlayer = forwardRef<CustomYouTubePlayerRef, CustomYouTubePlayerProps>(
  ({ videoId, title, duration, className = '' }, ref) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [showPlaceholder, setShowPlaceholder] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Extract video thumbnail
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    // Handle thumbnail error - fallback to default thumbnail
    const handleThumbnailError = () => {
      // If maxresdefault fails, try hqdefault
      const fallbackThumbnail = document.getElementById(`thumbnail-${videoId}`) as HTMLImageElement;
      if (fallbackThumbnail) {
        fallbackThumbnail.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      }
    };

    const handlePlay = () => {
      setIsLoaded(true);
      setIsFullscreen(true);
    };

    const handleExitFullscreen = () => {
      setIsFullscreen(false);
      setIsLoaded(false);
      setShowPlaceholder(true);
    };

    // Expose methods to parent component
    useImperativeHandle(ref, () => ({
      playVideo: handlePlay,
      exitFullscreen: handleExitFullscreen
    }));

    // Reset player if videoId changes
    useEffect(() => {
      setIsLoaded(false);
      setShowPlaceholder(true);
    }, [videoId]);

    return (
      <div className={`${isFullscreen ? 'fixed inset-0 z-50 bg-black flex items-center justify-center p-4' : `bg-gray-900 rounded-lg overflow-hidden aspect-video relative ${className}`}`}>
        {showPlaceholder && !isLoaded ? (
          <div className={`${isFullscreen ? 'w-full h-full max-w-6xl max-h-5xl' : 'absolute inset-0'} flex items-center justify-center bg-gray-800`}>
            <div className={`relative ${isFullscreen ? 'w-full h-full' : 'w-full h-full'}`}>
              {/* Thumbnail image */}
              <img
                id={`thumbnail-${videoId}`}
                src={thumbnailUrl}
                alt={title}
                className="w-full h-full object-cover"
                onError={handleThumbnailError}
              />
              
              {/* Play button overlay */}
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors cursor-pointer"
                onClick={handlePlay}
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors">
                  <Play className="w-12 h-12 text-white ml-1" fill="currentColor" />
                </div>
              </div>
              
              {/* Duration badge */}
              {duration && (
                <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {duration}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full">
            {/* YouTube iframe with custom parameters to minimize YouTube branding */}
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&fs=0&disablekb=1&controls=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={`${isFullscreen ? 'w-full h-full max-w-6xl max-h-5xl' : 'w-full h-full'} border-0`}
            />
            
            {/* Exit fullscreen button */}
            <button
              onClick={handleExitFullscreen}
              className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
              aria-label="Quitter le mode plein écran"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            
            {/* Revert to thumbnail button */}
            <button
              onClick={() => {
                setIsLoaded(false);
                setShowPlaceholder(true);
              }}
              className="absolute top-2 left-12 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
              aria-label="Retour à la vignette"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        )}
        
        {/* Close button for fullscreen */}
        {isFullscreen && (
          <button
            onClick={handleExitFullscreen}
            className="absolute top-4 right-4 bg-white/20 text-white p-2 rounded-full hover:bg-white/30 transition-colors z-20"
            aria-label="Fermer le lecteur"
          >
            <X className="w-6 h-6" />
          </button>
        )}
      </div>
    );
  }
);

CustomYouTubePlayer.displayName = 'CustomYouTubePlayer';

export default CustomYouTubePlayer;