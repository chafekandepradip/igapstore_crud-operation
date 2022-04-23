const database = require("../models/database");


class Vendors{
    id = 0;
    buisnessid=0;
    name = "";
    email = "";
    mobileno = "";
    address = "";
    cityid = "";
    pincode = "";
    query = "";
    db = new database.Database();

    constructor(){
        this.id = 0;
        this.buisnessid = 0;
        this.name = "";
        this.email = "";
        this.mobileno = "";
        this.address = "";
        this.cityid = "";
        this.pincode = "";
        this.query = "";
        
    }

    save =()=>{
        if(this.id==0){

          
            this.query = "INSERT INTO  buisness_vendors (buisnessid, name, email, mobileno, address, cityid, pincode)" 
            this.query += " VALUES ('" + this.buisnessid + "','" + this.name + "','" + this.email + "','" + this.mobileno + "','" + this.address + "','" + this.cityid + "','" + this.pincode + "')";
        }
        else {

            this.query = "UPDATE business_vendors SET  businessid='" + this.businessid + "', name='" + this.name + "' , email = '" + this.email + "', mobileno = '" + this.mobileno + "',address ='" + this.address + "',address = '" + this.address + "',cityid = '" + this.cityid + "', pincode = '" + this.pincode + "'";
            this.query += " WHERE id =" + this.id ;
        }
        console.log(this.query);

        return new Promise((resolve,reject)=>{
            this.db.query(this.query, (err,result)=>{
                this.db.close();
                    if(err){
                       return reject(err);
                       
                    };
                    resolve(result);
                });
            });
    }


    get = ()=>{
        this.query = "SELECT * FROM  buisness_vendors "; 
        this.query += " WHERE id = '"+ this.id + "' ";
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    reject(err);                
                resolve(result);
            });
        });
    }

    
    list = ()=>{
        this.query = "SELECT * FROM  buisness_vendors "; 
        console.log(this.query);
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    reject(err);                
                resolve(result);
            });
        });
    }

    delete = ()=>{
        this.query = "SELECT * FROM  buisness_vendors "; 
        this.query += " WHERE id = '"+ this.id + "' ";
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    reject(err);                
                resolve(result);
            });
        });
    }



}

module.exports = {

    Vendors: Vendors

}