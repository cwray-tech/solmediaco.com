module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e00c3fff69e792d1dbe3e8d117588ba0'),
  },
});
