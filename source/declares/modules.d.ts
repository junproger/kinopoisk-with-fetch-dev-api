// declare CSS module '*.module.css';

declare module '*.module.css' {
  type CSSType = Record<string, string>;
  const styles: CSSType;
  export = styles;
}

// declare SCSS module '*.module.scss';

declare module '*.module.scss' {
  type SCSSType = Record<string, string>;
  const styles: SCSSType;
  export = styles;
}

// declare SASS module '*.module.sass';

declare module '*.module.sass' {
  type SASSType = Record<string, string>;
  const styles: SASSType;
  export = styles;
}
