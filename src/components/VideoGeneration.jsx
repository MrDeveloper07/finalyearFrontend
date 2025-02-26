import { useState, useEffect } from 'react';
import { Search, Film, X, ExternalLink, Clock } from 'lucide-react';

const VideoGeneration = () => {
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);
  
  const API_KEY = "HQKCfWd4EhYF8uqqydrbJnJDeoVqkxrdYYv6VCqf7CRyYhIKsHvTlYrU";
  const per_page = 15;

  useEffect(() => {
    // Load search history from localStorage on component mount
    const history = localStorage.getItem('videoSearchHistory');
    if (history) {
      setSearchHistory(JSON.parse(history));
    }
  }, []);

  const addToSearchHistory = (term) => {
    const newHistory = [term, ...searchHistory.filter(item => item !== term)].slice(0, 5);
    setSearchHistory(newHistory);
    localStorage.setItem('videoSearchHistory', JSON.stringify(newHistory));
  };

  const searchVideos = async (searchTerm = query) => {
    if (!searchTerm.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const url = `https://api.pexels.com/videos/search?query=${encodeURIComponent(searchTerm)}&per_page=${per_page}`;
      const response = await fetch(url, {
        headers: {
          Authorization: API_KEY
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch videos');
      }
      
      const data = await response.json();
      setVideos(data.videos || []);
      addToSearchHistory(searchTerm);
    } catch (err) {
      setError(err.message);
      setVideos([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchVideos();
  };

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="flex items-center justify-center mb-8">
            <Film className="text-indigo-600 mr-2" size={28} />
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Video Discovery
            </h1>
          </div>
          
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What kind of videos are you looking for today?"
                className="w-full px-6 py-4 pr-16 text-lg border border-indigo-100 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent shadow-sm"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 rounded-full hover:shadow-lg transition-all duration-200"
                disabled={loading}
              >
                <Search size={24} />
              </button>
            </div>
          </form>

          {searchHistory.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm text-gray-500">Recent searches:</span>
                {searchHistory.map((term, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setQuery(term);
                      searchVideos(term);
                    }}
                    className="px-3 py-1 text-sm bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {error && (
            <div className="p-4 mb-6 text-red-700 bg-red-50 rounded-lg flex items-center">
              <X className="mr-2" size={20} />
              {error}
            </div>
          )}

          {selectedVideo ? (
            <div className="mb-6 animate-fadeIn">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">{query} Video</h2>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 flex items-center gap-2 transition-colors"
                >
                  <X size={16} /> Back to results
                </button>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-lg mb-6 bg-black">
                <video 
                  controls 
                  autoPlay
                  className="w-full aspect-video object-contain"
                  src={selectedVideo.video_files[0]?.link || ''}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-700 font-medium">By: {selectedVideo.user?.name || 'Unknown'}</p>
                    <div className="flex items-center mt-1 text-gray-500">
                      <Clock size={16} className="mr-1" />
                      <span>{formatDuration(selectedVideo.duration)}</span>
                    </div>
                  </div>
                  <a 
                    href={selectedVideo.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    View on Pexels <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {loading ? (
                <div className="flex justify-center my-16">
                  <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
                </div>
              ) : videos.length > 0 ? (
                <div className="animate-fadeIn">
                  <h2 className="text-xl font-semibold mb-6 text-gray-800">Search Results for "{query}"</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videos.map((video) => (
                      <div 
                        key={video.id} 
                        className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer bg-white"
                        onClick={() => setSelectedVideo(video)}
                      >
                        <div className="aspect-video bg-gray-100 relative overflow-hidden">
                          <img 
                            src={video.image} 
                            alt={`Video thumbnail for ${query}`}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute bottom-3 right-3 bg-black bg-opacity-75 text-white px-2 py-1 rounded-full text-xs flex items-center">
                            <Clock size={12} className="mr-1" />
                            {formatDuration(video.duration)}
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-medium px-4 py-2 rounded-full bg-indigo-600/80 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                              Watch Now
                            </span>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="font-medium text-gray-800 truncate">
                            {video.user?.name || 'Unknown Creator'}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            {new Date(video.created_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : query && (
                <div className="text-center my-16 p-8 bg-gray-50 rounded-lg">
                  <Film size={64} className="text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">No videos found for "{query}"</p>
                  <p className="text-gray-500 mt-2">Try different keywords or check your spelling</p>
                </div>
              )}
            </div>
          )}
          
          
        </div>
      </div>
    </div>
  );
};

export default VideoGeneration;