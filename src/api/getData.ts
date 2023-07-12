export async function getData<T>(url:string):Promise<Array<T> | unknown>{
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(error){
        return error;
    }
}
