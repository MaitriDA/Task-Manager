export const getUser=async()=>{
    try{
        const res = await fetch('/getName');
        const data=await res.json();
        
        if(!res.status===200){
            const error=new Error(res.error);
            throw error;
        }
        return data;
    }
    catch(err){
        console.log(err);
    }
}