export async function getDataHome() {
  const slug = process.env.NEXT_PUBLIC_API_URL;
  const readKey = process.env.READ_KEY;

  const url = `https://api.cosmicjs.com/v3/buckets/${slug}/objects/687f8e1bd5e8b76ec441bd7e?pretty=true&read_key=${readKey}&depth=1&props=slug,title,metadata,type`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (err) {
    throw new Error('Failed to fetch data');
  }
}
