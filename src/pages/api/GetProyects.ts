import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json([
    {
      id: 1,
      name: "Gif React",
      image: "https://i.postimg.cc/g03bzy77/gifReact.png",
    },
    {
      id: 2,
      name: "Gif React",
      image: "https://i.postimg.cc/TwH9BF9v/My-Anime-List-React.png",
    },
  ]);
};

export default handler;
