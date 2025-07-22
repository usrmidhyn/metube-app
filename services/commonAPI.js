//1.import axios
import axios from 'axios'
// 2.method to pass to axios to configure
export const commonAPI=async(httpMethod,serverurl,reqbody)=>{
        const rqCon={
            method:httpMethod,
            url:serverurl,
            data:reqbody
        }
        return await axios(rqCon).then(Response=>{
            return Response
        })
        .catch((err=>{
            return err
        }))

}