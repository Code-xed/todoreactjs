import React from 'react';

import TwitterIcon from './../static/svg/twit.svg';
import InstagramIcon from './../static/svg/instag.svg';
import TelegramIcon from './../static/svg/tg.svg';

function Socials () {
  return (
    <div className="flex flex-wrap ">
      <div className="w-auto">
        <img src={TwitterIcon} />
      </div>
      <div className="w-auto">
        <img src={InstagramIcon} />
      </div>
      <div className="w-auto">
        <img src={TelegramIcon} />
      </div>
    </div>
    );
}

export default Socials;