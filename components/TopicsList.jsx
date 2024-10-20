// import Link from "next/link";
// import RemoveBtn from "./RemoveBtn";
// import {HiPencilAlt} from 'react-icons/hi'

// const getTopic = async (e) => {
//     try {
//         const res = await fetch("http://localhost:3000/api/topics", {
//             cache: "no-store",
//         })
//         if(!res.ok){
//             throw new Error("Failed To Fetch Topics")
//         }
//         return res.json();
        
//     } catch (error) {
//         console.log("Failed To Fetch Topics",error)
        
//     }
// }
// export default async function TopicsList() {

//     const {topics} = await getTopic();
//     return <>
//     {topics.map((t=>(
//     <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
//         <div>
//             <h2 className="font-bold text-2xl">{t.title}</h2>
//             <h2>{t.description}</h2>
//         </div>

//         <div className="flex gap-2">
//             <RemoveBtn/>
//             <Link href={`/editTopic/${t._id}`}>
//             <HiPencilAlt size={24}/>
//             </Link>
//         </div>
//     </div>
//     )))}
    
//     </>

// }


import Link from "next/link";
import { HiPencilAlt } from 'react-icons/hi';
import RemoveBtn from "./RemoveBtn";
// import {HiPencilAlt} from 'react-icons/hi'


const getTopics = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/topics", {
            cache: "no-store", // Corrected spelling
        });
        if (!res.ok) {
            throw new Error("Failed to fetch topics");
        }
        return res.json();
    } catch (error) {
        console.error("Failed to fetch topics", error);
        return { topics: [] }; // Return an empty array if fetch fails
    }
};

export default async function TopicsList() {
    const { topics } = await getTopics();

    return (
        <>
            {topics.length === 0 ? (
                <p>No topics available.</p>
            ) : (
                topics.map((t) => (
                    <div key={t._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                        <div>
                            <h2 className="font-bold text-2xl">{t.title}</h2>
                            <h2>{t.description}</h2>
                        </div>
                        <div className="flex gap-2">
                             <RemoveBtn id={t._id}/>

                            <Link href={`/editTopic/${t._id}`}>
                                <HiPencilAlt size={24} />
                            </Link>
                        </div>
                    </div>
                ))
            )}
        </>
    );
}
