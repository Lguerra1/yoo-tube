import React from 'react';
import VideoItem from '../components/VideoItem';

const VideoList = (props) => {
    const renderedList = props.videos.map((video, index) => {
        return <VideoItem
            onVideoSelect={props.onVideoSelect}
            key={index}
            video={video}

        />
    })
    return <div className="ui relaxed divided list">
        {renderedList}
    </div>
}

export default VideoList