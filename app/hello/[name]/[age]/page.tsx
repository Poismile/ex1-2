export default async function Hello({ params }: {
    params: Promise<{
        name: string; age: string
    }>;
}) {
    const { name, age } = await params;
    return (
        <div>
            สวัสดีค่ะฉันชื่อ,{name} ฉันอายุ {age} ปี
        </div>
    )
}

