declare module 'typewriter-effect/dist/core' {
    class Typewriter {
      constructor(element: HTMLElement | string, options?: any);
      typeString(text: string): this;
      pauseFor(ms: number): this;
      deleteAll(): this;
      start(): this;
    }
    export default Typewriter;
  }