import { defaultInstance } from "../utils";

export const getUser = async (selectChannel) => {
    try{
        const {data} = await defaultInstance.get(
            'getUser'
        )
        return data
    }catch(error) {
        console.log(error)
    }
}