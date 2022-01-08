declare module "*.svg" {
    const content: any;
    export default content;
  }

  declare module 'react-animejs' {
    export default class Anime extends React.Component<any, any> {}
  }