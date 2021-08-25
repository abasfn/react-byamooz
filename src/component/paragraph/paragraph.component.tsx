import React from 'react';

type ParagraphType = {
  title?: string;
  className?: string;
  textalign?: 'text-left' | 'text-center' | 'text-right' | undefined;
}
const Paragraph = (props: ParagraphType) => {
  const className = props.className + ' ' + props.textalign;
  return (
    <p className={className}>{props.title}</p>
  );
};

export default Paragraph;