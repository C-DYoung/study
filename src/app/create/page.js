"use client"

// next/router -> next12 버전에서 사용하는 page router 방식
// import { useRouter } from "next/router";
// next13버전은 m router 를 사용해서 router가 아닌 navigation 에서 가져와야함
import { useRouter } from "next/navigation";

export default function Create() {
    const router = useRouter();
    return(
        <form onSubmit={(e)=>{
            // onSubmit 의 기본 동작을 막음. 
            e.preventDefault(); 
            const title = e.target.title.value;
            const body = e.target.body.value;
            // server로 데이터를 보내서 저장하는 것이라 options 필요
            const options ={
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({title, body})
            }
            fetch(`http://localhost:9999/topics`, options)
                .then(res=>res.json())
                .then(result=>{
                    console.log(result);
                    const lastid = result.id;
                    // 리디렉션
                    router.push(`/read/${lastid}`);
                    router.refresh();
                })
        }}>
            <p>
                <input type="text" name="title" placeholder="title" />
            </p>
            <p>
                <textarea name="body" placeholder="body"></textarea>
            </p>
            <p>
                <input type="submit" value="creat" />
            </p>
        </form>
    )
}