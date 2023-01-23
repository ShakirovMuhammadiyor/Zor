import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function () {
    let r = useRouter();
    useEffect(() => {
        r.push("/en/courses/my");
    });
}