import { useState } from 'react';

export default function useFetch(address: string) {
const [data, setData] = useState("");

async function handleSearch(address: string){
    const response = await fetch(address, {
      headers: { Accept: "application/json" },
    })
    const res = await response.json()
    setData(res);    
}

return [data, handleSearch]
}