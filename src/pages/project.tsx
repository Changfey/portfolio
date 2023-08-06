import Link from "next/link"

export default function Project() {
    return <ul>
        {
            Array.from(Array(30), (_, i) => {
                return <li key={i}>
                    <Link href={`/blog/${i + 1}`}>blog: {i + 1}</Link>
                </li>
            })
        }
    </ul>
}