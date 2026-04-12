export type ExplainProps = {
  id: number;
  active: boolean;
  title?: string | null;
  children?: React.ReactNode | string | null;
  examples?: string[] | string | null;
};

export type ExplainDummy = {
  title: string;
  children: string;
  examples: string[];
};
