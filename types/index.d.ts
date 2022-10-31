export declare function paste(
  e: {
    target: HTMLElement;
    preventDefault: (e: unknown) => void;
    clipboardData: { getData(name?: string): string };
  },
  options?: {
    rowSelector: string;
    cellSelector: string;
    inputSelector: string;
  }
): string;
