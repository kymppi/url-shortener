import {
  AfterCallback,
  handleAuth,
  handleCallback,
  Session,
} from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';
import { createUser } from '../../../utils/database';

const afterCallback: AfterCallback = async (
  _req: NextApiRequest,
  _res: NextApiResponse,
  session,
  _state
): Promise<Session> => {
  await createUser(session.user.email).catch((err) => console.error(err));

  return session;
};

export default handleAuth({
  async callback(req, res) {
    await handleCallback(req, res, { afterCallback }).catch((err) => {
      res.status(err.status || 500).end(err.message);
    });
  },
});
