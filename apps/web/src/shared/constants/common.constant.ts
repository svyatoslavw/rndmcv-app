export const RESPONSE_STATUS = {
  SUCCESS: "success",
  ERROR: "error"
}

export const RESPONSE_MESSAGE = {
  UNAUTHORIZED: "UNAUTHORIZED",
  SERVER_ERROR: "SERVER ERROR",
  NOT_FOUND: (entity: string) => `${entity} not found`,
  CUSTOM: (entity: string) => `${entity}`
}
