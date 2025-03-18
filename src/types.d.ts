/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
} 