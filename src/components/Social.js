import React from 'react';

const Social = (props) => {
    const twitterUrl = "https://twitter.com/kidkrazydotnet";
    const soundCloudUrl = "https://soundcloud.com/kidkrazydotnet/sets/kidkrazy";
    const linkedInUrl = "https://www.linkedin.com/in/keith-ryan-43b15227";

    return (
        <ul className="social">
            <li>
                    <a
                        href={twitterUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-twitter"></i>
                        twitter
                    </a>
            </li>
            <li>
                    <a
                        href={soundCloudUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-soundcloud"></i>
                        soundcloud
                    </a>
            </li>
            <li>
                    <a
                        href={linkedInUrl}
                        rel="noreferrer"
                        target="_blank"
                    >
                        <i className="fab fa-linkedin"></i>
                        soundcloud
                    </a>
            </li>
        </ul>
    )
}

export default Social;