export type ExplainProps = {
  id?: number;
  active: boolean;
  title: string;
  children: React.ReactNode | string;
  examples: string[];
};

export type ExplainDummy = {
  title: string;
  children: React.ReactNode | string;
  examples: string[];
};
