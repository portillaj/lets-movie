import React from 'react';

const VideoSection = (props) => {

  if(!props){
    return <div>Loading...</div>;
  }
  const url = `https://www.youtube.com/embed/${props.trailer}`;
        return(
          <div className="video-detail">
            <div className="row">
              <div className="col-md-12 video-half">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item playing-video" src={url}></iframe>
                </div>
              </div>

            </div>

          </div>
        );
    }

export default VideoSection;
