export default ({ env }: { env: { (key: string, defaultValue?: any): any; bool: (key: string, defaultValue?: boolean) => boolean } }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true), // ✅ Now correctly typed
    promoteEE: env.bool('FLAG_PROMOTE_EE', true), // ✅ Now correctly typed
  },
});
