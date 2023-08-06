import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function House() {
    const router = useRouter();
    console.log('===', router, router.query);
    const [data, setData] = useState(null);
    useEffect(() => {
        // 发送接口请求
        // axios(`api/xxx/${router.query.id}`).then(res => setData(data))
    }, [])
    return <div>{router.query.id} <div>{data}</div></div>
}