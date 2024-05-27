const getData = async () => {
  const result = new Promise((res, rej) => {
    setTimeout(() => {
      res('test');
    }, 1000);
  });

  const data = await result;

  return { data: 'siema' };
};

export default async function Home() {
  const data = await getData();
  return <div>{data.data}</div>;
}
