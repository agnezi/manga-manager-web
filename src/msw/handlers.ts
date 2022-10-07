import type { LoginBody, LoginResponse } from "../types/login";

import { CollectionResponse } from "../types/collections";
import { rest } from "msw";

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
  rest.get<CollectionResponse[]>(
    `${baseUrl}/collections/:name`,
    async (req, res, ctx) => {
      return res(
        ctx.json([
          {
            id: "634088f546ea03a504e7a091",
            title: "sit",
            description:
              "proident eu ad aliquip sint sunt pariatur voluptate consequat magna",
            volume: 8,
            createdAt: "2012-02-29T12:21:52.557Z",
            updatedAt: "2012-03-01T12:21:52.557Z",
          },
          {
            id: "634088f5614043ed02d45cec",
            title: "aute",
            description:
              "laborum nisi pariatur quis quis velit incididunt adipisicing aute id",
            volume: 2,
            createdAt: "2013-07-05T15:05:58.919Z",
            updatedAt: "2013-07-06T15:05:58.919Z",
          },
          {
            id: "634088f525e430ddef00c8cb",
            title: "Lorem",
            description:
              "ipsum nulla aliqua ut pariatur veniam nisi commodo aliquip ex",
            volume: 2,
            createdAt: "2011-12-20T23:35:10.099Z",
            updatedAt: "2011-12-21T23:35:10.099Z",
          },
          {
            id: "634088f5150a884e3aed0554",
            title: "ullamco",
            description:
              "consectetur voluptate consectetur magna exercitation minim nisi Lorem nulla velit",
            volume: 1,
            createdAt: "2010-06-09T21:39:15.124Z",
            updatedAt: "2010-06-10T21:39:15.124Z",
          },
          {
            id: "634088f57232885c48875534",
            title: "est",
            description:
              "quis amet pariatur aliquip anim excepteur nisi minim aliquip adipisicing",
            volume: 1,
            createdAt: "2010-07-29T03:20:01.735Z",
            updatedAt: "2010-07-30T03:20:01.735Z",
          },
          {
            id: "634088f541601a43666b839d",
            title: "ipsum",
            description:
              "eiusmod labore elit adipisicing laborum incididunt non non Lorem consectetur",
            volume: 4,
            createdAt: "2010-06-07T07:35:07.878Z",
            updatedAt: "2010-06-08T07:35:07.878Z",
          },
          {
            id: "634088f53eb76d4235c4467f",
            title: "dolor",
            description:
              "adipisicing nisi consectetur dolor et sunt mollit officia ullamco ad",
            volume: 5,
            createdAt: "2013-12-18T11:57:35.658Z",
            updatedAt: "2013-12-19T11:57:35.658Z",
          },
          {
            id: "634088f5f5aa7bc7212bdba4",
            title: "sit",
            description:
              "Lorem irure amet tempor est et ullamco quis incididunt incididunt",
            volume: 0,
            createdAt: "2014-03-22T10:35:59.554Z",
            updatedAt: "2014-03-23T10:35:59.554Z",
          },
          {
            id: "634088f5a05fcd69420cc95d",
            title: "irure",
            description:
              "do cupidatat pariatur enim ipsum fugiat ut aliqua veniam nulla",
            volume: 1,
            createdAt: "2012-04-10T13:29:26.014Z",
            updatedAt: "2012-04-11T13:29:26.014Z",
          },
          {
            id: "634088f534514305dc61d1df",
            title: "cillum",
            description:
              "et dolore incididunt eu ad eu anim fugiat in excepteur",
            volume: 6,
            createdAt: "2014-12-20T05:27:12.382Z",
            updatedAt: "2014-12-21T05:27:12.382Z",
          },
        ])
      );
    }
  ),
];
