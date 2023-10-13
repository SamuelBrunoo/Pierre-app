export type SaveTalkRes =
  | {
      ok: true;
    }
  | {
      ok: false;
      error: DescError;
    };

type DescError = any;
