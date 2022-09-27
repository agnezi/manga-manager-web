import { rest } from "msw";
interface LoginBody {
  username: string;
  password: string;
}

interface LoginResponse {
  username: string;
  accessToken: string;
  updatedAt: string;
  createdAt: string;
  id: string;
}

const baseUrl = import.meta.env.VITE_BASE_URL;

export const handlers = [
  rest.post<LoginBody, LoginResponse>(
    `${baseUrl}/login`,
    async (req, res, ctx) => {
      const { username } = await req.json<LoginBody>();
      return res(
        ctx.json({
          username,
          accessToken: "128h928h9128h39128h3213sdagfdsgfdsg",
          id: "12df2-0f12f-4grwegf4-bv",
          createdAt: new Date(),
          updatedAt: new Date(),
        })
      );
    }
  ),
];
