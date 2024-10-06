"use client";
import { useEffect, useState } from "react";

export default function Home({ ip }: any) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/ip");
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);
  return (
    <main>
      hello world {ip} xx {JSON.stringify(data)}
    </main>
  );
}
