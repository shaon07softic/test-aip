export default async function Home({ ip }: any) {
  // const [data, setData] = useState(null);

  const data = await fetch("http://localhost:3000/api/ip", {
    cache: "no-store",
  }).then((res) => res.json());

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("/api/ip");
  //     const data = await response.json();
  //     setData(data);
  //   };

  //   fetchData();
  // }, []);
  return (
    <main>
      hello world {ip} xx {JSON.stringify(data)}
    </main>
  );
}
