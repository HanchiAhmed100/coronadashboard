import axios from 'axios';

class service {
    static Get_World_Data(){
        return new Promise(async (resolve,reject) =>{
            try{
                const res = await axios.get('https://corona.lmao.ninja/countries?sort=country');
                const data = res.data;
                resolve(
                    data
                )
            }catch(err){
                reject(err);
            }
        })
    }
    static Get_World_Stat(){
        
        return new Promise(async (resolve,reject) =>{
            try{
                const res = await axios.get('https://corona.lmao.ninja/all');
                const data = res.data;
                resolve(
                    data
                )
            }catch(err){
                reject(err);
            }
        })
    }
    static Get_Tunisia_Data(){
        
    }

    
}

export default service
