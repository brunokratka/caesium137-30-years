import React            from 'react';
import { string, bool } from 'prop-types';
// dependencies
import { Paragraph }    from './Text-style';

Text.propTypes = {
  text: string.isRequired,
  eye: bool,
  href: string,
  link: bool
}

/**
* Component Text
* @param {String} text    - string text
* @param {Boolean} eye    - 
*/
function Text({ text, eye, href, link }) {

  if(link){
    return (
      <div>
        <Paragraph eye={eye}>
          <a href={href} target="_blank">{text}</a>
        </Paragraph>
      </div>
    )
  }else{
    return (
      <div>
        <Paragraph eye={eye}>
          {text}
        </Paragraph>
      </div>
    )
  }
}

export default Text;