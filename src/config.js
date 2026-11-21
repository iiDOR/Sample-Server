const env = (key, fallback) => process.env[key] ?? fallback;

export default {
  port: Number(env('PORT', '3000')),
  host: env('HOST', '0.0.0.0'),
  nodeEnv: env('NODE_ENV', 'development'),
  logLevel: env('LOG_LEVEL', 'info'),
};
