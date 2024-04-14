const commonTypes = {
  BAD_ENTRY: 400,
  NOT_AUTHORIZED: 401,
  ROLE_NOT_FOUND: 500,
  ERROR: 500,
  INSUFFICIENT_PERMISSIONS: 403,
  NOT_FOUND: 404,
} as const;

export { commonTypes };
