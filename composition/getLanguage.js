import { useRouter } from 'next/router';

export default function () {
    return useRouter().query.lang;
}