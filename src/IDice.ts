export interface IDice {
    value: number;
    held: boolean;
    handler: () => void;
  }  