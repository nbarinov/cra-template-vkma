export { };

/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

// fix image
declare global {
  interface HTMLImageElement {
    importance?: 'high' | 'low' | 'auto';
  }
}

declare module 'react' {
  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    importance?: 'high' | 'low' | 'auto';
  }
}
