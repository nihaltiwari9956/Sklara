import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { API } from '../../API'
import { isAutheticated } from '../../components/auth/authhelper'
import S3FileUpload from 'react-s3'
import { Buffer } from 'buffer';

window.Buffer = Buffer;

const Test = () => {
    const [data,setData] = useState(null)
    const {token} = isAutheticated();
    const [file,setFile] = useState(null)
    const [fileUrl,setFileUrl] = useState('')

    useEffect(()=>{
        const getCreds = async(req,res)=>{
            try{
                let res = await axios.get(`${API}/api/events/s3-cred`,{
                    headers: {
                        Authorization: `Bearer ${token}`
                      }
                })
                if(res.data.status === 'ok'){
                    let d = res.data.data;
                    // console.log(res.data.data)
                    setData(d)
                    
                }
            }catch(err){
                console.log('Error')
            }
        };
        getCreds()
    },[]);
const config = {
        bucketName: data && data.bucket,
        region:data && data.region,
        accessKeyId:data && data.access,
        secretAccessKey:data && data.secret
    }
console.log(config)
    const handleUpload =(e)=>{
        e.preventDefault();
        const newfile = e.target.files[0]
        let formData = new FormData()
        formData.append('file',newfile)
        try{
            S3FileUpload.uploadFile(formData,config)
            .then(dta => console.log(dta))
            .catch(err => console.error(err))
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className='container p-5'>
            <div className='col-md-8 center p-5'>
                <div className='mb-4'>
                    <input type='file' onChange={e=>handleUpload(e)} className='form-control'/>
                    {/* <button onClick={handleUpload} className='btn btn-success'>Upload</button> */}
                </div>

                <hr></hr>
                <img src='' className='img-fluid' alt=''/>
            </div>
            
        </div>
    )
}

export default Test
