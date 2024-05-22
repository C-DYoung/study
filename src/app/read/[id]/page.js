// 데이터를 읽고 출력 => 사용자와 상호작용 x -> 서버 컴퍼넌트
export default async function Read(props) {
    const resp = await fetch(`http://localhost:9999/topics/${props.params.id}`);
    const topic = await resp.json();
    return(
        <>
            <h2> {topic.title} </h2>
            {topic.body}
            
        </>
    )
}