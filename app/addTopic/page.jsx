"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import toast, { Toaster } from 'react-hot-toast';
export default function  AddTopic() {
    // waxyaalaha aa qabaneysid
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const router = useRouter()


    // functionka shaqada qabanaayo

    const handleSubmit = async (e) =>{
        e.preventDefault();
        // hade ka check gareysid empty fieldska
        if(!title || !description){
            alert("Please fill all the fields")
            return
        }
        // soo qabo xogta ee save gareey
        try{
            const res= await fetch("http://localhost:3000/api/topics",{
                method:"POST",
                headers:{
                    "Content-type": "application/json"
                },
                body:JSON.stringify({title,description}),
            })
            if(res.ok){
                toast.success("Topic created successfully!");
                router.push("/")
            }else {
                // throw new Error("Failed to create new Topic")
                toast.error(error.message);
            }
        }catch(error){
            console.log(error)
        }
    }
    

   


    return ( 
    <form onSubmit={handleSubmit}
     className="flex flex-col gap-3 ">
        <input onChange={(e)=> setTitle(e.target.value)}
         className="border border-slate-500 px-8 py-2"
         type="text" placeholder="Topic Title" />
        <input onChange={(e)=> setDescription(e.target.value)}
         className="border border-slate-500 px-8 py-2" 
        type="text" placeholder="Topic Title" />

    <button type="submit"
 className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
    Add Topic
    </button>


    </form>
    )
}