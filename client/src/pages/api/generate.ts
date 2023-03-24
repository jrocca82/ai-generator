// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const bufferToBase64 = (buffer: ArrayBuffer) => {
  const arr = new Uint8Array(buffer);
  const base64 = btoa(
    arr.reduce((data, byte) => data + String.fromCharCode(byte), "")
  );
  return `data:image/png;base64,${base64}`;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ image: string }>
) {
  const { input } = JSON.parse(req.body);
  const response = await fetch(
    "https://api-inference.huggingface.co/models/loluvulol/sd-1-5-jorocca",
    {
      headers: {
        Authorization: `Bearer ${process.env.HF_AUTH_KEY}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        inputs: input,
      }),
    }
  );

  if (response.ok) {
    const buffer = await response.arrayBuffer();
    const base64 = bufferToBase64(buffer);
    res.status(200).json({ image: base64 });
  } else if (response.status === 503) {
    const json = await response.json();
    res.status(503).json(json);
  } else {
    res.status(response.status).json({ image: response.statusText });
  }
}
